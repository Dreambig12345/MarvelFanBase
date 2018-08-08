package com.dreambig.MarvelFanBase.controller;

import com.dreambig.MarvelFanBase.model.City;
import com.dreambig.MarvelFanBase.model.EntityWithRevision;
import com.dreambig.MarvelFanBase.repository.CityRevisionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by mndeveci on 18.11.2016.
 */

@RestController
@RequestMapping("/api/cities/history")
public class CityRevisionController {

    @Autowired
    private CityRevisionRepository cityRevisionRepository;


    @RequestMapping("/revisions/{cityCode}")
    public List<EntityWithRevision<City>> getCityRevisions(@PathVariable Integer cityCode) {
        return cityRevisionRepository.listCityRevisions(cityCode);
    }



}
