const fetchUrl: string = 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu'; 
    
const jobListContainer = document.querySelector('.jobList__container') as HTMLDivElement;
const modalContainer = document.querySelector('.modal__container') as HTMLDivElement;
const jobDetailedTittle = document.querySelector('.job__detaled__tittle_h3') as HTMLElement;
const jobDetaledSalary = document.querySelector('.job__detaled__salary') as HTMLElement;
const jobDetaledCreatedAt = document.querySelector('.post__date') as HTMLElement;
const jobDetaledDescription = document.querySelector('.description__text') as HTMLElement;
const jobDetaledEmployerTypeContainer = document.querySelector('.job__detaled__type__div') as HTMLDivElement;
const jobDetailedBenefisContainer = document.querySelector('.job__benefits__group') as HTMLDivElement;
const employerTypeParagraf = document.querySelector('.employer__type__for') as HTMLParagraphElement;
const benefisParagraf = document.querySelector('.benefis__for') as HTMLParagraphElement;
const imgDiv = document.querySelector('.attached__img__div') as HTMLDivElement;
const bgHid = document.querySelector('body') as HTMLElement;
const mapDepartament = document.querySelector('.map__list__name') as HTMLElement;
const mapAddres = document.querySelector('.map__list__address') as HTMLElement;
const mapPhone = document.querySelector('.map__list__phone') as HTMLElement;
const mapPost = document.querySelector('.map__list__post') as HTMLElement;

interface dataPromise {
    address: string,
    benefits:  [string, string],
    createdAt: string,
    description: string,
    email: string,
    employment_type: [string],
    id: string,
    location: {lat: number, long: number},
    name: string,
    phone: string,
    pictures: [string, string, string],
    salary: string,
    title: string,
    updatedAt: string,
}


showPost();

async function fetchPosts(url: string) {
    let response = await fetch(url);
    let body = await response.json();
    return body as dataPromise[];
}

async function showPost(): Promise<void> {
    let jobListData = await fetchPosts(fetchUrl);
    // Display the contents of the first item in the response
 
  jobListRender(jobListData);
  

}




    //fetch('https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu'); 
    
    

    

    function jobListRender (jobListData: any){
      jobListData.forEach(function (item: any){
        
       
        const jobListHTML: string = `<div class ="job__wrapper">
                                        <div class="job__img">
                                          <img class="main__img" src="${item.pictures[2]}" alt="">
                                        </div>
                                            <div class="job__discription">
                                                <ul>
                                                    <li><h2><a id ="${item.id}" href="#">${item.title}</a></h2></li>
                                                    <li class="text__bottom">Deportamen name: ${item.name}</li>
                                                    <li class="text__bottom">Austria</li>

                                                </ul>
                                            </div>
                                            <div class="job__rate__post">
                                              <p class="posted text__bottom">2 days ago</p>
                                          </div>
                                      </div>  `;
        jobListContainer.insertAdjacentHTML('beforeend', jobListHTML);
        
      });


      

      
         jobListContainer.addEventListener('click', createDetaledList);

            function createDetaledList (event: any){
                const targetId = event.target as HTMLElement;
                let employerOut: string = '';
                let benefisOut: string = '';
                let picturesOut: string = '';

            for (let i = 0; i < jobListData.length; i++){

                
               
               if (targetId.id == jobListData[i].id){

                for (let j = 0; j < jobListData[i].employment_type.length; j++) {
                    
                    employerOut += `<p>${jobListData[i].employment_type[j]}</p>`;
                    
                }

                for (let g = 0; g < jobListData[i].benefits.length; g++){
                    benefisOut += `<p>${jobListData[i].benefits[g]}</p>`;
                      
                }

                for (let h = 0; h < jobListData[i].pictures.length; h++){
                    picturesOut += `<img src="${jobListData[i].pictures[h]}" alt="">`;
                    
                }
                
                   modalContainer.classList.remove('none');
                   jobListContainer.classList.add('none');
                   jobDetailedTittle.innerHTML = jobListData[i].title;
                   jobDetaledSalary.innerHTML = jobListData[i].salary; 
                   jobDetaledCreatedAt.innerHTML = jobListData[i].createdAt;
                   jobDetaledDescription.innerHTML = jobListData[i].description;
                   employerTypeParagraf.innerHTML = employerOut;
                   benefisParagraf.innerHTML = benefisOut;
                   imgDiv.innerHTML = picturesOut;
                   mapDepartament.innerHTML = jobListData[i].name;
                   mapAddres.innerHTML = jobListData[i].address;
                   mapPhone.innerHTML = jobListData[i].phone;
                   mapPost.innerHTML = jobListData[i].email;
               }
               
               
            }

            const returBtn = document.querySelector('.btn__back') as HTMLButtonElement;

            returBtn.addEventListener('click', goBack);

            function goBack (event: any){
                const targetBtn = event.target;

                if ( targetBtn == returBtn) {
                    
                    modalContainer.classList.add('none');
                    jobListContainer.classList.remove('none');
                
                } 
            }
    
            }    
            
        };
            
            
    
        
        