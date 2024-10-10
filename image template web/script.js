let uploadedImage = null;
let canvas, ctx, scaleFactor = 1, rotateAngle = 0, flipX = 1, flipY = 1, posX = 0, posY = 0;

document.addEventListener('DOMContentLoaded', function() {
    canvas = document.getElementById('image-canvas');
    ctx = canvas.getContext('2d');

    document.getElementById('image-upload').addEventListener('change', function(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
            uploadedImage = new Image();
            uploadedImage.onload = drawImage;
            uploadedImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    });

    document.getElementById('merge-btn').addEventListener('click', function() {
        drawImage();
    });

    document.getElementById('download-btn').addEventListener('click', function() {
        const link = document.createElement('a');
        link.download = 'merged_image.png';
        link.href = canvas.toDataURL();
        link.click();
    });

    document.getElementById('zoom-in').addEventListener('click', () => {
        scaleFactor += 0.1;
        drawImage();
    });

    document.getElementById('zoom-out').addEventListener('click', () => {
        scaleFactor -= 0.1;
        drawImage();
    });

    document.getElementById('move-up').addEventListener('click', () => {
        posY -= 5;
        drawImage();
    });

    document.getElementById('move-down').addEventListener('click', () => {
        posY += 5;
        drawImage();
    });

    document.getElementById('move-left').addEventListener('click', () => {
        posX -= 5;
        drawImage();
    });

    document.getElementById('move-right').addEventListener('click', () => {
        posX += 5;
        drawImage();
    });

    document.getElementById('rotate-cw').addEventListener('click', () => {
        rotateAngle += 5;
        drawImage();
    });

    document.getElementById('rotate-ccw').addEventListener('click', () => {
        rotateAngle -= 5;
        drawImage();
    });

    document.getElementById('flip-h').addEventListener('click', () => {
        flipX *= -1;
        drawImage();
    });

    document.getElementById('flip-v').addEventListener('click', () => {
        flipY *= -1;
        drawImage();
    });

    function drawImage() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (uploadedImage) {
            ctx.save();
            ctx.translate(canvas.width / 2 + posX, canvas.height / 2 + posY);
            ctx.rotate(rotateAngle * Math.PI / 180);
            ctx.scale(flipX * scaleFactor, flipY * scaleFactor);
            ctx.drawImage(uploadedImage, -uploadedImage.width / 2, -uploadedImage.height / 2);
            ctx.restore();
        }

        const name = document.getElementById('name').value;
        const std = document.getElementById('std').value;
        const sec = document.getElementById('sec').value;
        const sub = document.getElementById('sub').value;
        const school = document.getElementById('school').value;

        ctx.fillStyle = 'red';
        ctx.font = 'bold 100px Arial';
        ctx.fillText(name, 400, 100);

        ctx.fillStyle = 'black';
        ctx.font = 'bold 60px Arial';
        ctx.fillText(`Std:`, 300, 200);
        ctx.fillText(`Sec:`, 600, 200); 
        ctx.fillText(`Subject:`, 300, 300);
        ctx.fillText(`School:`, 300, 400);

        ctx.fillStyle = 'blue';
        ctx.font = 'bold 60px Arial';
        ctx.fillText(std, 450, 200);
        ctx.fillText(sec, 750, 200); 
        ctx.fillText(sub, 550, 300);
        ctx.fillText(school, 550, 400);

        ctx.beginPath();
        ctx.moveTo(430, 210);
        ctx.lineTo(500, 210);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 7;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(730, 210); 
        ctx.lineTo(800, 210);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(530, 310); 
        ctx.lineTo(800, 310);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(530, 410); 
        ctx.lineTo(800, 410);
        ctx.stroke();
    }
});
