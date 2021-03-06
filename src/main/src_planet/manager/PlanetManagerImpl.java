package manager;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import dao.PlanetDao;
import po.PlanetPo;
import po.PlanetRecordResult;

import java.util.List;

@Service
public class PlanetManagerImpl implements PlanetManager {
	@Resource
	private PlanetDao planetDao;

	public PlanetRecordResult queryPlanetRecordByMemeberPerMonth(String userId,String userName) {
		PlanetRecordResult preResult = planetDao.queryPlanetRecordByIdAndMonth(userId);
		if(preResult==null){
			preResult = new PlanetRecordResult(userId,userName);
		}
		return preResult;
	}

	public void insertPlanetRecordById(PlanetPo planetPo) {
		planetDao.uploadPlanetRecordById(planetPo);
	}

	public List<PlanetPo> queryPlanetPoFiveByUserId(String userId) {
		List<PlanetPo> planetPoList = planetDao.queryPlanetPoFiveByUserId(userId);
		return planetPoList;
	}

}
