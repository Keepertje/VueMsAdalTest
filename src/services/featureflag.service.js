import axios from 'axios';

const ffconfig = {
  endpoint: 'https://ws20ftf200-p.ase20fe01-p.p.azurewebsites.net/features/enabled/innovatieportaal',
  domain: 'innovatieportaal'
};

export default {

  async getEnabledFeatures() {
    const accessToken = localStorage.getItem('adal.idtoken')
    var tokenheader = {
      headers: { 'Authorization': "bearer " + accessToken  }
    };
    return axios.get(ffconfig.endpoint, tokenheader).then(resp => resp.data)
  }
}


