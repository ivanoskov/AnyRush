#include <algorithm>
#include <array>
#include <iostream>
#include <vector>


void initial() {
    for (int i = 0; i < node + edge; ++i) {
        parent[i] = i;
    }
}

int root(int i) {
    while (parent[i] != i) {
        parent[i] = parent[parent[i]];
        i = parent[i];
    }
    return i;
}

void join(int x, int y) {
    int root_x = root(x);  // Disjoint set union by rank
    int root_y = root(y);
    parent[root_x] = root_y;
}

ll kruskal() {
    ll mincost = 0;
    for (int i = 0; i < edge; ++i) {
        ll x = edges[i].second.first;
        ll y = edges[i].second.second;
        if (root(x) != root(y)) {
            mincost += edges[i].first;
            join(x, y);
        }
    }
    return mincost;
}
