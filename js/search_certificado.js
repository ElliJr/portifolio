    document.addEventListener('DOMContentLoaded', () => {
            const filterInput = document.getElementById('filterInput');
            const certificatesContainer = document.getElementById('certificatesContainer');
            const certificateItems = certificatesContainer.getElementsByClassName('certificate-item');

            const filterCertificates = () => {
                const filterText = filterInput.value.toLowerCase().trim();

                Array.from(certificateItems).forEach(item => {
                    const imgElement = item.querySelector('img');
                    const languages = imgElement ? imgElement.dataset.languages.toLowerCase() : '';

                    if (languages.includes(filterText) || filterText === '') {
                        item.style.display = '';
                    } else {
                        item.style.display = 'none';
                    }
                });
            };

            filterInput.addEventListener('input', filterCertificates);
        });