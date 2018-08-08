package com.dreambig.MarvelFanBase.repository;

import com.dreambig.MarvelFanBase.model.City;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CityRepository extends CrudRepository<City, Integer> {

    List<City> findByName(String name);

}
