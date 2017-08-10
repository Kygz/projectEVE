package dao;

import po.ShipAssemblyPo;

import java.util.List;
import java.util.Map;

public interface ShipAssemblyDao {

    void insertShipAssemblyPo(ShipAssemblyPo po);
    List<ShipAssemblyPo> queryShipAssemblyPo(Map<String,Object> queryParams);
}