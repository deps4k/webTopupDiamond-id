    // Data harga diamond per game
    const gamePrices = {
      'Mobile Legends': [
        { amount: 86, price: 25000 },
        { amount: 172, price: 50000 },
        { amount: 257, price: 75000 },
        { amount: 344, price: 100000 },
        { amount: 429, price: 125000 },
        { amount: 514, price: 150000 }
      ],
      'Free Fire': [ 
        { amount: 100, price: 15000 },
        { amount: 310, price: 45000 },
        { amount: 520, price: 75000 },
        { amount: 1060, price: 150000 },
        { amount: 2180, price: 300000 },
        { amount: 5600, price: 750000 }
      ],
      'PUBG Mobile': [
        { amount: 120, price: 20000 },
        { amount: 600, price: 100000 },
        { amount: 1200, price: 200000 },
        { amount: 3000, price: 500000 },
        { amount: 6000, price: 1000000 }
      ],
      'Genshin Impact': [
        { amount: 60, price: 16000 },
        { amount: 300, price: 80000 },
        { amount: 980, price: 250000 },
        { amount: 1980, price: 500000 },
        { amount: 3280, price: 800000 },
        { amount: 6480, price: 1500000 }
      ],
      'Valorant': [
        { amount: 125, price: 15000 },
        { amount: 400, price: 50000 },
        { amount: 700, price: 80000 },
        { amount: 1375, price: 150000 },
        { amount: 2400, price: 250000 },
        { amount: 4000, price: 400000 }
      ],
      'Call of Duty': [
        { amount: 80, price: 15000 },
        { amount: 400, price: 75000 },
        { amount: 800, price: 150000 },
        { amount: 2000, price: 375000 },
        { amount: 4000, price: 750000 }
      ],
      'Clash of Clans': [
        { amount: 500, price: 80000 },
        { amount: 1200, price: 190000 },
        { amount: 2500, price: 390000 },
        { amount: 6500, price: 990000 }
      ],
      'Delta Force': [
        { amount: 125, price: 20000 },
        { amount: 420, price: 65000 },
        { amount: 700, price: 100000 },
        { amount: 1375, price: 190000 },
        { amount: 2400, price: 320000 },
        { amount: 4000, price: 500000 }
      ],
      'Minecraft': [
        { amount: 1720, price: 130000 },
        { amount: 3500, price: 265000 }
      ]
    };

    // Game ID information
    const gameIdInfo = {
      'mlbb': {
        label: 'ID Mobile Legends',
        info: '(Masukkan ID Mobile Legends Anda)',
        placeholder: 'Contoh: 123456789 (123)',
        serverLabel: 'Server Mobile Legends',
        serverInfo: '(Masukkan Server MLBB)',
        serverPlaceholder: 'Contoh: 1234, atau Server ID'
      },
      'ff': {
        label: 'ID Free Fire',
        info: '(Masukkan ID Free Fire Anda)',
        placeholder: 'Contoh: 1234567890',
        serverLabel: 'Server Free Fire',
        serverInfo: '(Masukkan Server FF)',
        serverPlaceholder: 'Contoh: Indonesia, Asia, dll'
      },
      'pubg': {
        label: 'ID PUBG Mobile',
        info: '(Masukkan ID PUBG Mobile Anda)',
        placeholder: 'Contoh: 1234567890123456789',
        serverLabel: 'Server PUBG Mobile',
        serverInfo: '(Masukkan Server PUBG)',
        serverPlaceholder: 'Contoh: Asia, Europe, dll'
      },
      'genshin': {
        label: 'UID Genshin Impact',
        info: '(Masukkan UID Genshin Impact Anda)',
        placeholder: 'Contoh: 700000001',
        serverLabel: 'Server Genshin Impact',
        serverInfo: '(Masukkan Server GI)',
        serverPlaceholder: 'Contoh: Asia, America, Europe, dll'
      },
      'valorant': {
        label: 'Riot ID',
        info: '(Masukkan Riot ID Anda)',
        placeholder: 'Contoh: Nama#1234',
        serverLabel: 'Region Valorant',
        serverInfo: '(Masukkan Region Valorant)',
        serverPlaceholder: 'Contoh: Asia Pacific, Europe, dll'
      },
      'cod': {
        label: 'ID Call of Duty',
        info: '(Masukkan ID Call of Duty Anda)',
        placeholder: 'Contoh: NamaPengguna#1234567',
        serverLabel: 'Region Call of Duty',
        serverInfo: '(Masukkan Region COD)',
        serverPlaceholder: 'Contoh: Global, Asia, dll'
      },
      'coc': {
        label: 'Player Tag',
        info: '(Masukkan Player Tag Clash of Clans)',
        placeholder: 'Contoh: #ABC12345',
        serverLabel: 'Region Clash of Clans',
        serverInfo: '(Masukkan Region COC)',
        serverPlaceholder: 'Contoh: Global, International, dll'
      },
      'delta': {
        label: 'ID Delta Force',
        info: '(Masukkan ID Delta Force Anda)',
        placeholder: 'Contoh: DF123456789',
        serverLabel: 'Server Delta Force',
        serverInfo: '(Masukkan Server Delta Force)',
        serverPlaceholder: 'Contoh: Asia, Global, dll'
      },
      'mc': {
        label: 'Username Minecraft',
        info: '(Masukkan Username Minecraft Anda)',
        placeholder: 'Contoh: Player123',
        serverLabel: 'Server Minecraft',
        serverInfo: '(Masukkan Server Minecraft)',
        serverPlaceholder: 'Contoh: Hypixel, Mineplex, atau IP Server'
      }
    };

    // Game Selection
    let selectedGame = null;
    let selectedGameCode = null;
    let selectedDiamond = { amount: 0, price: 0 };
    let selectedPayment = null;
    let promoActive = false;
    let cashbackPercentage = 0;
    let transactionId = null;

    // Initialize components on page load
    document.addEventListener('DOMContentLoaded', () => {
      document.getElementById('current-year').textContent = new Date().getFullYear();
      initHeader();
      initNavigation();
      initThemeToggle();
    });

    // Initialize theme toggle functionality
    function initThemeToggle() {
      const themeToggle = document.getElementById('theme-toggle');
      const themeToggleMobile = document.getElementById('theme-toggle-mobile');
      
      // Check for saved theme preference or respect OS preference
      const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      
      // Set initial theme
      if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (themeToggle) themeToggle.checked = true;
        if (themeToggleMobile) themeToggleMobile.checked = true;
      }
      
      // Add event listeners to both toggles
      if (themeToggle) {
        themeToggle.addEventListener('change', toggleTheme);
      }
      
      if (themeToggleMobile) {
        themeToggleMobile.addEventListener('change', function() {
          // Sync both toggles
          if (themeToggle) {
            themeToggle.checked = this.checked;
          }
          toggleTheme();
        });
      }
    }
    
    // Toggle theme function
    function toggleTheme() {
      const isDarkMode = document.body.classList.toggle('dark-mode');
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }

    // Initialize header functionality
    function initHeader() {
      const mobileMenuButton = document.getElementById('mobileMenuButton');
      const mobileMenu = document.getElementById('mobileMenu');
      
      if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
          const isExpanded = mobileMenu.classList.toggle('active');
          mobileMenuButton.classList.toggle('active');
          mobileMenuButton.setAttribute('aria-expanded', isExpanded);
          mobileMenuButton.querySelector('i').className = isExpanded ? 'fas fa-times' : 'fas fa-bars';
        });
      }
    }

    // Initialize navigation
    function initNavigation() {
      // Next to account
      document.getElementById('next-to-account').addEventListener('click', () => {
        showSection('account-section');
      });
      
      // Back to game
      document.getElementById('back-to-game').addEventListener('click', () => {
        showSection('game-section');
      });
      
      // Next to diamond
      document.getElementById('next-to-diamond').addEventListener('click', () => {
        // Validate account form
        const gameId = document.getElementById('game-id').value.trim();
        const nickname = document.getElementById('game-nickname').value.trim();
        const server = document.getElementById('game-server').value.trim();
        
        if (!gameId || !nickname || !server) {
          alert('Harap lengkapi semua data akun game!');
          return;
        }
        
        showSection('diamond-section');
      });
      
      // Back to account
      document.getElementById('back-to-account').addEventListener('click', () => {
        showSection('account-section');
      });
      
      // Next to payment
      document.getElementById('next-to-payment').addEventListener('click', () => {
        // Update payment summary
        document.getElementById('summary-game').textContent = selectedGame;
        document.getElementById('summary-id').textContent = document.getElementById('game-id').value;
        document.getElementById('summary-nickname').textContent = document.getElementById('game-nickname').value;
        document.getElementById('summary-server').textContent = document.getElementById('game-server').value;
        document.getElementById('summary-diamond').textContent = selectedDiamond.amount.toLocaleString('id-ID') + ' Diamond';
        document.getElementById('summary-total').textContent = document.getElementById('total-price').textContent;
        
        showSection('payment-section');
      });
      
      // Back to diamond
      document.getElementById('back-to-diamond').addEventListener('click', () => {
        showSection('diamond-section');
      });
      
      // Success modal close
      document.getElementById('success-close').addEventListener('click', () => {
        document.getElementById('success-modal').style.display = 'none';
        resetForm();
      });
      
      // Claim promo
      document.getElementById('claim-promo').addEventListener('click', function() {
        promoActive = true;
        cashbackPercentage = 20;
        alert('Promo berhasil diklaim! Anda akan mendapatkan cashback 20% untuk pembelian diamond tertentu.');
        
        // Update prices if diamond is already selected
        if (selectedDiamond.amount > 0) {
          const diamondCards = document.querySelectorAll('.diamond-card');
          diamondCards.forEach(card => {
            if (card.classList.contains('selected')) {
              const hasPromo = card.querySelector('.promo-badge') !== null;
              selectDiamond(card, selectedDiamond.amount, selectedDiamond.price, hasPromo);
            }
          });
        }
      });
      
      // Confirm purchase
      document.getElementById('confirm-purchase').addEventListener('click', () => {
        const gameId = document.getElementById('game-id').value.trim();
        const nickname = document.getElementById('game-nickname').value.trim();
        const server = document.getElementById('game-server').value.trim();
        
        if (!gameId || !nickname || !server) {
          alert('Harap lengkapi data akun game!');
          return;
        }
        
        if (!selectedGame || selectedDiamond.amount === 0 || !selectedPayment) {
          alert('Harap pilih game, jumlah diamond, dan metode pembayaran!');
          return;
        }
        
        showSuccessModal();
      });
    }

    // Show specific section
    function showSection(sectionId) {
      // Hide all sections
      document.querySelectorAll('.dynamic-section').forEach(section => {
        section.classList.remove('visible');
      });
      
      // Show the requested section
      document.getElementById(sectionId).classList.add('visible');
    }

    function selectGame(card, gameName, gameCode) {
      document.querySelectorAll('.game-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      selectedGame = gameName;
      selectedGameCode = gameCode;
      
      const selectedGameInput = document.getElementById('selected-game');
      const selectedGameDiamond = document.getElementById('selected-game-diamond');
      if (selectedGameInput) {
        selectedGameInput.value = gameName;
      }
      if (selectedGameDiamond) {
        selectedGameDiamond.value = gameName;
      }
      
      // Update form labels based on selected game
      updateFormLabels(gameCode);
      
      // Generate diamond packages based on selected game
      generateDiamondPackages(gameName);
      
      // Enable next button
      document.getElementById('next-to-account').disabled = false;
    }

    function updateFormLabels(gameCode) {
      const gameInfo = gameIdInfo[gameCode] || {
        label: 'ID Game',
        info: '(Masukkan ID Game Anda)',
        placeholder: 'Masukkan ID Game Anda',
        serverLabel: 'Server',
        serverInfo: '(Masukkan Server Game)',
        serverPlaceholder: 'Masukkan Server Game'
      };
      
      document.getElementById('id-label').textContent = gameInfo.label;
      document.getElementById('id-info').textContent = gameInfo.info;
      document.getElementById('game-id').placeholder = gameInfo.placeholder;
      
      document.getElementById('server-label').textContent = gameInfo.serverLabel;
      document.getElementById('server-info').textContent = gameInfo.serverInfo;
      document.getElementById('game-server').placeholder = gameInfo.serverPlaceholder;
    }

    function generateDiamondPackages(gameName) {
      const diamondContainer = document.getElementById('diamond-container');
      diamondContainer.innerHTML = '';
      
      if (gamePrices[gameName]) {
        gamePrices[gameName].forEach(package => {
          const diamondCard = document.createElement('div');
          diamondCard.className = 'diamond-card text-center bg-white p-4 rounded-lg shadow-md relative border-2 border-transparent cursor-pointer';
          
          // Add promo badge for certain packages
          const hasPromo = package.amount >= 1000 && Math.random() > 0.5;
          
          diamondCard.innerHTML = `
            ${hasPromo ? '<span class="promo-badge">Promo</span>' : ''}
            <h3 class="font-semibold text-gray-900">${package.amount.toLocaleString('id-ID')} ${selectedGameCode === 'mc' ? 'Koin' : 'Diamond'}</h3>
            <p class="text-gray-600">Rp ${package.price.toLocaleString('id-ID')}</p>
            <button class="mt-2 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">Pilih</button>
          `;
          
          diamondCard.onclick = () => selectDiamond(diamondCard, package.amount, package.price, hasPromo);
          diamondContainer.appendChild(diamondCard);
        });
      }
    }

    function selectDiamond(card, amount, price, hasPromo = false) {
      document.querySelectorAll('.diamond-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      selectedDiamond = { amount, price };
      
      const selectedDiamondInput = document.getElementById('selected-diamond');
      const selectedPriceInput = document.getElementById('selected-price');
      const cashbackInput = document.getElementById('cashback-amount');
      const totalPriceInput = document.getElementById('total-price');
      
      if (selectedDiamondInput && selectedPriceInput && cashbackInput && totalPriceInput) {
        selectedDiamondInput.textContent = `${amount.toLocaleString('id-ID')} ${selectedGameCode === 'mc' ? 'Koin' : 'Diamond'}`;
        selectedPriceInput.textContent = `Rp ${price.toLocaleString('id-ID')}`;
        
        // Calculate cashback if promo is active
        let cashback = 0;
        let finalPrice = price;
        
        if (promoActive && hasPromo) {
          cashback = Math.floor(price * cashbackPercentage / 100);
          finalPrice = price - cashback;
          cashbackInput.textContent = `Rp ${cashback.toLocaleString('id-ID')}`;
        } else {
          cashbackInput.textContent = 'Rp 0';
        }
        
        totalPriceInput.textContent = `Rp ${finalPrice.toLocaleString('id-ID')}`;
      }
      
      // Enable next button
      document.getElementById('next-to-payment').disabled = false;
    }

    function selectPayment(card, method) {
      document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('selected'));
      card.classList.add('selected');
      selectedPayment = method;
      const selectedPaymentInput = document.getElementById('selected-payment');
      if (selectedPaymentInput) {
        selectedPaymentInput.value = method;
      }
      
      // Enable confirm button
      document.getElementById('confirm-purchase').disabled = false;
    }

    // Reset form
    function resetForm() {
      document.querySelectorAll('.game-card').forEach(card => card.classList.remove('selected'));
      document.querySelectorAll('.diamond-card').forEach(card => card.classList.remove('selected'));
      document.querySelectorAll('.payment-method').forEach(method => method.classList.remove('selected'));
      
      const selectedGameInput = document.getElementById('selected-game');
      const selectedGameDiamond = document.getElementById('selected-game-diamond');
      const selectedDiamondInput = document.getElementById('selected-diamond');
      const selectedPriceInput = document.getElementById('selected-price');
      const selectedPaymentInput = document.getElementById('selected-payment');
      const cashbackInput = document.getElementById('cashback-amount');
      const totalPriceInput = document.getElementById('total-price');
      const gameIdInput = document.getElementById('game-id');
      const nicknameInput = document.getElementById('game-nickname');
      const serverInput = document.getElementById('game-server');
      
      if (selectedGameInput) selectedGameInput.value = '- Pilih Game -';
      if (selectedGameDiamond) selectedGameDiamond.value = '- Pilih Game -';
      if (selectedDiamondInput) selectedDiamondInput.textContent = '0 Diamond';
      if (selectedPriceInput) selectedPriceInput.textContent = 'Rp 0';
      if (selectedPaymentInput) selectedPaymentInput.value = '- Pilih Metode -';
      if (cashbackInput) cashbackInput.textContent = 'Rp 0';
      if (totalPriceInput) totalPriceInput.textContent = 'Rp 0';
      if (gameIdInput) gameIdInput.value = '';
      if (nicknameInput) nicknameInput.value = '';
      if (serverInput) serverInput.value = '';
      
      // Reset form labels
      document.getElementById('id-label').textContent = 'ID Game';
      document.getElementById('id-info').textContent = '(Masukkan ID Game Anda)';
      document.getElementById('game-id').placeholder = 'Masukkan ID Game Anda';
      
      document.getElementById('server-label').textContent = 'Server';
      document.getElementById('server-info').textContent = '(Masukkan Server Game)';
      document.getElementById('game-server').placeholder = 'Masukkan Server Game';
      
      selectedGame = null;
      selectedGameCode = null;
      selectedDiamond = { amount: 0, price: 0 };
      selectedPayment = null;
      transactionId = null;
      
      // Reset navigation buttons
      document.getElementById('next-to-account').disabled = true;
      document.getElementById('next-to-payment').disabled = true;
      document.getElementById('confirm-purchase').disabled = true;
      
      // Hide all sections except game section
      showSection('game-section');
    }

    // Show success modal
    function showSuccessModal() {
      const gameId = document.getElementById('game-id').value.trim();
      const nickname = document.getElementById('game-nickname').value.trim();
      const server = document.getElementById('game-server').value.trim();
      const cashbackInput = document.getElementById('cashback-amount');
      const totalPriceInput = document.getElementById('total-price');
      
      const cashback = cashbackInput.textContent;
      const totalPrice = totalPriceInput.textContent;
      
      // Generate transaction ID if not exists
      if (!transactionId) {
        transactionId = 'TRX-' + Math.floor(100000 + Math.random() * 900000);
      }
      
      // Simpan transaksi ke riwayat
      const transactionData = {
        id: transactionId,
        timestamp: new Date().toISOString(),
        game: selectedGame,
        gameCode: selectedGameCode,
        playerId: gameId,
        nickname: nickname,
        server: server,
        amount: selectedDiamond.amount,
        originalPrice: `Rp ${selectedDiamond.price.toLocaleString('id-ID')}`,
        cashback: cashback,
        totalPrice: totalPrice,
        paymentMethod: selectedPayment,
        status: 'completed'
      };
      
      // Panggil fungsi untuk menyimpan ke riwayat
      saveTransactionToHistory(transactionData);
      
      // Lanjutkan dengan menampilkan detail sukses
      const successDetails = document.getElementById('success-details');
      if (successDetails) {
        successDetails.innerHTML = `
          <p><strong>ID Transaksi:</strong> ${transactionId}</p>
          <p><strong>Waktu:</strong> ${new Date().toLocaleString('id-ID')}</p>
          <p><strong>Game:</strong> ${selectedGame}</p>
          <p><strong>ID Pemain:</strong> ${gameId}</p>
          <p><strong>Nickname:</strong> ${nickname}</p>
          <p><strong>Server:</strong> ${server}</p>
          <p><strong>Jumlah ${selectedGameCode === 'mc' ? 'Koin' : 'Diamond'}:</strong> ${selectedDiamond.amount.toLocaleString('id-ID')}</p>
          <p><strong>Total Harga:</strong> ${totalPrice}</p>
          <p><strong>Metode Pembayaran:</strong> ${selectedPayment}</p>
          <p><strong>Status:</strong> <span class="text-green-600 font-semibold">Berhasil</span></p>
        `;
      }
      
      const modal = document.getElementById('success-modal');
      if (modal) {
        modal.style.display = 'flex';
      }
    }

    // Fungsi untuk menyimpan transaksi ke riwayat
    function saveTransactionToHistory(transactionData) {
      try {
        let purchaseHistory = JSON.parse(localStorage.getItem('purchaseHistory')) || [];
        
        // Tambahkan transaksi baru ke awal array
        purchaseHistory.unshift(transactionData);
        
        // Batasi riwayat maksimal 50 transaksi
        if (purchaseHistory.length > 15) {
          purchaseHistory = purchaseHistory.slice(0, 15);
        }
        
        // Simpan ke localStorage
        localStorage.setItem('purchaseHistory', JSON.stringify(purchaseHistory));
        
        console.log('Transaksi disimpan ke riwayat:', transactionData.id);
      } catch (error) {
        console.error('Gagal menyimpan transaksi ke riwayat:', error);
      }
    }