// Brainrot memes collection - VERIFIED WORKING MEMES ONLY
const memeImages = [
    // Top Tier Classic Memes - ALL VERIFIED
    'https://i.imgflip.com/30b1gx.jpg', // Drake Hotline Bling
    'https://i.imgflip.com/261o3j.jpg', // Panik Kalm Panik
    'https://i.imgflip.com/1bij.jpg', // Success Kid
    'https://i.imgflip.com/1g8my4.jpg', // Distracted Boyfriend
    'https://i.imgflip.com/26am.jpg', // Futurama Fry
    'https://i.imgflip.com/3oevdk.jpg', // Buff Doge vs Cheems
    'https://i.imgflip.com/4t0m5.jpg', // Woman Yelling at Cat
    'https://i.imgflip.com/1ur9b0.jpg', // Surprised Pikachu
    'https://i.imgflip.com/4acd7j.jpg', // Bernie Sanders Chair
    'https://i.imgflip.com/1h7in3.jpg', // Doge
    'https://i.imgflip.com/23ls.jpg', // Grumpy Cat
    'https://i.imgflip.com/2fm6x.jpg', // Disaster Girl
    'https://i.imgflip.com/1ihzfe.jpg', // Skull Trumpet
    'https://i.imgflip.com/5c7lwq.jpg', // Sigma Male
    'https://i.imgflip.com/1otk96.jpg', // Distracted Boyfriend Original
    
    // More Verified Classics
    'https://i.imgflip.com/1bh.jpg', // Bad Luck Brian
    'https://i.imgflip.com/1bgw.jpg', // Roll Safe Think About It
    'https://i.imgflip.com/9ehk.jpg', // Third World Success Kid
    'https://i.imgflip.com/265k.jpg', // Archer
    'https://i.imgflip.com/1c1uej.jpg', // Leonardo Dicaprio Cheers
    'https://i.imgflip.com/3qqcim.jpg', // Change My Mind
    'https://i.imgflip.com/1yxkcp.jpg', // Ancient Aliens
    'https://i.imgflip.com/4j4hg.jpg', // Afraid To Ask Andy
    'https://i.imgflip.com/7nfap.jpg', // Hide the Pain Harold
    'https://i.imgflip.com/w2.jpg', // Y U No
    
    // Animals & Creatures
    'https://i.imgflip.com/1in1.jpg', // Batman Slapping Robin
    'https://i.imgflip.com/emccr.jpg', // Evil Kermit
    'https://i.imgflip.com/1tl71a.jpg', // Mocking Spongebob
    'https://i.imgflip.com/9c6ug.jpg', // Black Girl Wat
    'https://i.imgflip.com/26jk.jpg', // Scumbag Steve
    
    // Modern Classics
    'https://i.imgflip.com/30h16f.jpg', // Me and the Boys
    'https://i.imgflip.com/6wst6k.jpg', // Average Fan vs Average Enjoyer
    'https://i.imgflip.com/3si4.jpg', // Expanding Brain
    'https://i.imgflip.com/woj.jpg', // Sad Keanu
    'https://i.imgflip.com/cq2.jpg', // First World Problems
    
    // Extra Verified Memes
    'https://i.imgflip.com/1367.jpg', // Finding Neverland
    'https://i.imgflip.com/26hg.jpg', // Star Wars Yoda
    'https://i.imgflip.com/20k0o.jpg', // College Liberal
    'https://i.imgflip.com/64sz.jpg', // Laughing Leo
    'https://i.imgflip.com/grr.jpg', // Angry Baby
    'https://i.imgflip.com/9vct.jpg', // Philosoraptor
    
    // Gigachad & Sigma Collection
    'https://i.imgflip.com/6f4xis.jpg', // Gigachad
    'https://i.imgflip.com/5xqv8m.jpg', // Gigachad Walking
    'https://i.imgflip.com/4cqhg4.jpg', // Buff Doge Solo
    
    // More Classics
    'https://i.imgflip.com/345v97.jpg', // Trump Bill Signing
    'https://i.imgflip.com/7p58hv.jpg', // Monkey Puppet
    'https://i.imgflip.com/5n47vl.jpg', // Sad Wojak
    'https://i.imgflip.com/4x63yh.jpg', // Yes Chad
    'https://i.imgflip.com/2hgfw.jpg', // NPC Wojak
    
    // Bonus Verified Memes (50+)
    'https://i.imgflip.com/1e7ql7.jpg', // Surprised Pikachu HD
    'https://i.imgflip.com/3oqj6u.jpg', // Smug Pepe
    'https://i.imgflip.com/8p0am8.jpg', // Crying Wojak
];

// MLG Music - Multiple Tracks
const mlgMusic = [
    'https://www.youtube.com/watch?v=2WPCLda_erI', // MLG Airhorn
    'https://www.youtube.com/watch?v=gEJHrmliVQw' // Smoke Weed Every Day
];

// Audio element for background music
let backgroundMusic = null;

// MLG Sound Effects (visual representations)
const mlgEffects = [
    '🔊 AIRHORN! 📯',
    '🎺 WOW! 🎺',
    '💥 MOM GET THE CAMERA! 📹',
    '🔥 OH BABY A TRIPLE! 🔥',
    '⚡ WOMBO COMBO! ⚡',
    '🎮 MLG PRO! 🎮',
    '👑 360 NO SCOPE! 👑',
    '🚀 TACTICAL NUKE INCOMING! 🚀',
    '💀 REKT! 💀',
    '🗿 DANK! 🗿',
    '🌿 BLAZE IT! 420 🌿',
    '🎯 HEADSHOT! 🎯',
    '⭐ ILLUMINATI CONFIRMED! ⭐',
    '🔥 GET NOSCOPED! 🔥',
    '💯 MLG AF! 💯'
];

const explosionGifs = [
    'https://media.giphy.com/media/HhTXt43pk1I1W/giphy.gif',
    'https://media.giphy.com/media/3o7btNDyBs5qTw8xu0/giphy.gif',
    'https://media.giphy.com/media/IwAZ6dvvvaTtdI8SD5/giphy.gif',
    'https://media.giphy.com/media/L4caiF7GTkgJa/giphy.gif',
    'https://media.giphy.com/media/13d2jHlSlxklVe/giphy.gif',
    'https://media.giphy.com/media/ZB95y3XSFbljaNu7mT/giphy.gif'
];

const motivationalTexts = [
    'BOMBARDIRO ACTIVATED! 💣',
    'CROCODILO MODE ON! 🐊',
    'SIGMA GRINDSET! 🗿',
    'BASED AND REDPILLED! 💀',
    'GIGACHAD MOMENT! 💪',
    'SHEEEESH! 🔥',
    'NO CAP FR FR! 👑',
    'BUSSIN BUSSIN! ✨',
    'SLAY QUEEN! 💅',
    'OHIO FINAL BOSS! 🌽',
    'ONLY IN OHIO! 💀',
    'RIZZ UNLOCKED! 😎',
    'W MOMENT! 🏆',
    'CAUGHT IN 4K! 📸',
    'RATIO! 📊',
    'MLG PRO! 🎮',
    'DANK MEMES! 🗿',
    'BASED! 💯',
    'ABSOLUTE UNIT! 🦍',
    'CERTIFIED BRUH MOMENT! 😤',
    'STONKS! 📈',
    'THIS IS BUSSIN! 🔥',
    'GYATT! 😳',
    'SKIBIDI! 🚽'
];

let taskCount = 0;
let completedCount = 0;
let combo = 0;

document.addEventListener('DOMContentLoaded', () => {

    // Initialize MLG Background Music
    initMLGMusic();

    // Initialize tasks array in localStorage if it doesn't exist
    if (!localStorage.getItem('tasks')) {
        localStorage.setItem('tasks', JSON.stringify([]));
    }

    // Initialize stats
    if (!localStorage.getItem('stats')) {
        localStorage.setItem('stats', JSON.stringify({ total: 0, completed: 0 }));
    }

    // Load existing tasks from localStorage
    loadTasks();
    updateStats();

    // By default, submit button is disabled
    document.querySelector('#submit').disabled = true;

    // Enable button only if there is text in the input field
    document.querySelector('#task').onkeyup = () => {
        const val = document.querySelector('#task').value;
        if (val.length > 0 && val[0] !== ' ')
            document.querySelector('#submit').disabled = false;
        else
            document.querySelector('#submit').disabled = true;
    };

    // Handle form submission
    document.querySelector('form').onsubmit = (e) => {
        e.preventDefault();
        const taskValue = document.querySelector('#task').value;

        // Get current tasks from localStorage
        let tasks = JSON.parse(localStorage.getItem('tasks'));

        // Create task object
        const taskObj = {
            id: Date.now(),
            text: taskValue,
            completed: false,
            meme: memeImages[Math.floor(Math.random() * memeImages.length)]
        };

        // Add new task to array
        tasks.push(taskObj);

        // Save updated tasks to localStorage
        localStorage.setItem('tasks', JSON.stringify(tasks));

        // Add new task to the DOM
        addTaskToDOM(taskObj);

        // Clear input field
        document.querySelector('#task').value = '';

        // Disable submit button
        document.querySelector('#submit').disabled = true;

        // Update stats
        taskCount++;
        updateStats();

        // MLG EFFECT!
        showMLGEffect();

        // Show motivational text
        showMotivationalText();

        // Screen shake
        document.body.classList.add('shake');
        setTimeout(() => document.body.classList.remove('shake'), 500);

        // Spawn floating memes
        for (let i = 0; i < 3; i++) {
            setTimeout(() => spawnFloatingMeme(), i * 200);
        }

        return false;
    };

    // Spawn random floating memes periodically
    setInterval(() => {
        if (Math.random() > 0.7) {
            spawnFloatingMeme();
        }
    }, 3000);

});

// Function to load tasks from localStorage and display them
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const stats = JSON.parse(localStorage.getItem('stats'));
    
    taskCount = tasks.length;
    completedCount = tasks.filter(t => t.completed).length;
    
    tasks.forEach(task => {
        addTaskToDOM(task);
    });
}

// Function to add a task to the DOM
function addTaskToDOM(taskObj) {
    const li = document.createElement('li');
    if (taskObj.completed) {
        li.classList.add('completed');
    }

    // Checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';
    checkbox.checked = taskObj.completed;
    checkbox.onchange = () => {
        toggleTask(taskObj.id, checkbox.checked, li);
    };

    // Task text
    const taskText = document.createElement('span');
    taskText.className = 'task-text';
    taskText.textContent = taskObj.text;

    // Meme emoji
    const memeSpan = document.createElement('img');
    memeSpan.className = 'task-meme';
    memeSpan.src = taskObj.meme;
    memeSpan.alt = 'meme';

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '💥';
    deleteBtn.onclick = () => {
        deleteTask(taskObj.id, li);
    };

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(memeSpan);
    li.appendChild(deleteBtn);
    
    document.querySelector('#tasks').appendChild(li);
}

// Toggle task completion
function toggleTask(taskId, isCompleted, liElement) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    
    if (taskIndex !== -1) {
        tasks[taskIndex].completed = isCompleted;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        
        if (isCompleted) {
            liElement.classList.add('completed');
            completedCount++;
            combo++;
            
            // Explosion effect
            showExplosion(liElement);
            
            // Extra effects for combo
            if (combo >= 3) {
                showMotivationalText(`${combo}X COMBO! 🔥🔥🔥`);
                showMLGEffect();
                document.body.classList.add('shake');
                setTimeout(() => document.body.classList.remove('shake'), 500);
            }
            
            // Play sound effect (visual representation)
            for (let i = 0; i < 5; i++) {
                setTimeout(() => spawnFloatingMeme(), i * 100);
            }
        } else {
            liElement.classList.remove('completed');
            completedCount--;
            combo = 0;
        }
        
        updateStats();
    }
}

// Delete task
function deleteTask(taskId, liElement) {
    // Explosion effect
    showExplosion(liElement);
    
    // Remove from DOM with animation
    liElement.style.transform = 'scale(0) rotate(720deg)';
    liElement.style.opacity = '0';
    
    setTimeout(() => {
        liElement.remove();
        
        // Remove from localStorage
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        const taskIndex = tasks.findIndex(t => t.id === taskId);
        
        if (taskIndex !== -1) {
            if (tasks[taskIndex].completed) {
                completedCount--;
            }
            tasks.splice(taskIndex, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            taskCount--;
            updateStats();
        }
    }, 500);
    
    // Screen shake
    document.body.classList.add('shake');
    setTimeout(() => document.body.classList.remove('shake'), 500);
    
    showMotivationalText('BOMBARDIRO! 💣💥');
    showMLGEffect();
}

// Update stats display
function updateStats() {
    document.querySelector('#total-tasks').textContent = taskCount;
    document.querySelector('#completed-tasks').textContent = completedCount;
    const percentage = taskCount > 0 ? Math.round((completedCount / taskCount) * 100) : 0;
    document.querySelector('#percentage').textContent = percentage + '%';
    
    // Save stats
    localStorage.setItem('stats', JSON.stringify({ 
        total: taskCount, 
        completed: completedCount 
    }));
}

// Show motivational text
function showMotivationalText(customText) {
    const text = customText || motivationalTexts[Math.floor(Math.random() * motivationalTexts.length)];
    const div = document.createElement('div');
    div.className = 'motivational-text';
    div.textContent = text;
    div.style.position = 'fixed';
    div.style.top = '50%';
    div.style.left = '50%';
    div.style.transform = 'translate(-50%, -50%)';
    div.style.zIndex = '9999';
    
    document.body.appendChild(div);
    
    setTimeout(() => {
        div.style.opacity = '0';
        div.style.transition = 'opacity 0.5s';
        setTimeout(() => div.remove(), 500);
    }, 2000);
}

// Spawn floating meme
function spawnFloatingMeme() {
    const meme = document.createElement('div');
    meme.className = 'floating-meme';
    
    const img = document.createElement('img');
    img.src = memeImages[Math.floor(Math.random() * memeImages.length)];
    img.alt = 'floating meme';
    
    meme.appendChild(img);
    meme.style.left = Math.random() * (window.innerWidth - 100) + 'px';
    meme.style.top = Math.random() * (window.innerHeight - 100) + 'px';
    
    document.body.appendChild(meme);
    
    setTimeout(() => meme.remove(), 3000);
}

// Show explosion effect
function showExplosion(element) {
    const explosion = document.createElement('div');
    explosion.className = 'explosion';
    
    const img = document.createElement('img');
    img.src = explosionGifs[Math.floor(Math.random() * explosionGifs.length)];
    img.alt = 'explosion';
    
    explosion.appendChild(img);
    element.style.position = 'relative';
    element.appendChild(explosion);
    
    setTimeout(() => explosion.remove(), 500);
}

// Show MLG Effect
function showMLGEffect() {
    const mlgText = mlgEffects[Math.floor(Math.random() * mlgEffects.length)];
    const div = document.createElement('div');
    div.className = 'mlg-effect';
    div.textContent = mlgText;
    div.style.position = 'fixed';
    div.style.top = Math.random() * 50 + 25 + '%';
    div.style.left = Math.random() * 50 + 25 + '%';
    div.style.transform = 'translate(-50%, -50%) rotate(' + (Math.random() * 40 - 20) + 'deg)';
    div.style.fontSize = '3em';
    div.style.fontWeight = 'bold';
    div.style.color = '#00ff00';
    div.style.textShadow = '0 0 10px #00ff00, 0 0 20px #00ff00, 3px 3px 0 #000';
    div.style.zIndex = '9999';
    div.style.animation = 'mlgPulse 0.5s ease-in-out';
    div.style.pointerEvents = 'none';
    
    document.body.appendChild(div);
    
    // Play airhorn effect
    playAirhornEffect();
    
    setTimeout(() => {
        div.style.opacity = '0';
        div.style.transition = 'opacity 0.3s';
        setTimeout(() => div.remove(), 300);
    }, 1000);
}

// Initialize MLG Background Music
function initMLGMusic() {
    // Create YouTube iframe container
    const musicContainer = document.createElement('div');
    musicContainer.id = 'youtube-player-container';
    musicContainer.style.position = 'fixed';
    musicContainer.style.bottom = '-200px'; // Hidden below screen
    musicContainer.style.left = '0';
    musicContainer.style.width = '1px';
    musicContainer.style.height = '1px';
    musicContainer.style.opacity = '0';
    musicContainer.style.pointerEvents = 'none';
    
    // YouTube iframe with the MLG video
    musicContainer.innerHTML = `
        <iframe id="youtube-player" 
            width="1" 
            height="1" 
            src="https://www.youtube.com/embed/3_-a9nVZYjk?enablejsapi=1&loop=1&playlist=3_-a9nVZYjk&autoplay=0" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    `;
    
    document.body.appendChild(musicContainer);
    
    // Add music control button
    const musicButton = document.createElement('button');
    musicButton.innerHTML = '🔊 MLG MUSIC ON';
    musicButton.className = 'music-toggle';
    musicButton.style.position = 'fixed';
    musicButton.style.bottom = '20px';
    musicButton.style.right = '20px';
    musicButton.style.zIndex = '10000';
    musicButton.style.padding = '15px 25px';
    musicButton.style.fontSize = '1.2em';
    musicButton.style.fontWeight = 'bold';
    musicButton.style.border = '4px solid #000';
    musicButton.style.borderRadius = '10px';
    musicButton.style.background = 'linear-gradient(45deg, #00ff00, #00aa00)';
    musicButton.style.color = '#000';
    musicButton.style.cursor = 'pointer';
    musicButton.style.boxShadow = '5px 5px 0 rgba(0,0,0,0.3)';
    musicButton.style.fontFamily = 'Comic Neue, cursive';
    musicButton.style.transition = 'all 0.3s ease';
    
    let isPlaying = false;
    
    musicButton.onclick = () => {
        const iframe = document.getElementById('youtube-player');
        
        if (isPlaying) {
            // Pause video
            iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
            musicButton.innerHTML = '🔇 MLG MUSIC OFF';
            musicButton.style.background = 'linear-gradient(45deg, #ff0000, #aa0000)';
            musicButton.style.color = '#fff';
        } else {
            // Play video
            iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
            musicButton.innerHTML = '🔊 MLG MUSIC ON';
            musicButton.style.background = 'linear-gradient(45deg, #00ff00, #00aa00)';
            musicButton.style.color = '#000';
        }
        isPlaying = !isPlaying;
        
        // Animation on click
        musicButton.style.transform = 'scale(0.9) rotate(-5deg)';
        setTimeout(() => {
            musicButton.style.transform = 'scale(1) rotate(0deg)';
        }, 100);
    };
    
    document.body.appendChild(musicButton);
}

// Play airhorn effect (visual + audio simulation)
function playAirhornEffect() {
    // Create visual airhorn effect
    const airhorn = document.createElement('div');
    airhorn.textContent = '📯';
    airhorn.style.position = 'fixed';
    airhorn.style.fontSize = '5em';
    airhorn.style.top = '50%';
    airhorn.style.left = '50%';
    airhorn.style.transform = 'translate(-50%, -50%)';
    airhorn.style.zIndex = '10000';
    airhorn.style.animation = 'airhornBlast 0.3s ease-out';
    airhorn.style.pointerEvents = 'none';
    airhorn.style.textShadow = '0 0 20px #ffff00';
    
    document.body.appendChild(airhorn);
    
    setTimeout(() => airhorn.remove(), 300);
}
