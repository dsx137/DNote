---
---

# Dijkstra

荷兰语\
Dijkstra /ˈdaɪkstrə/

+ 将起始顶点的路径长度标记为0，其余顶点标记为$\infty$
  1. 找出未标记顶点中距离起始节点最小的顶点V
  2. 更新V的邻接点的路径距离
  3. 标记V
  4. 跳到1，直至无未标记顶点

## 原理

贪心

## 优化

### 堆优化（优先队列）

## 代码实现

### 堆优化，邻接多重表

```cpp
int dijkstra(int ivex, int jvex) {
        int *pathLength = new int[n];
        bool *mark = new bool[n];
        for (int i = 0;i < n;i++) {
            pathLength[i] = 200000;
            mark[i] = false;
            pathCount[i] = 0;
        }
        pathLength[ivex] = 0;
        while (1) {
            //
            int minVex = -1;
            for (int i = 0;i < n;i++)
            if(minVex == -1)
                else if (mark[i] && pathLength[i] <pathLength[minVex])
                    minVex = i;
            if (minVex == -1) break;
            //
            EDGE *p = vertexes[minVex].firstEdge;
            while (p) {
                int headVex = minVex == p->ivex ? p->jvex : p->ivex;
                if (pathLength[minVex] + p->weight < pathLength[headVex]) {
                    pathLength[headVex] = pathLength[minVex] + p->weight;
                }
                p = (minVex == p->ivex ? p->ilink : p->jlink);
            }
            mark[minVex] = true;
        }
        return pathLength[jvex] == 200000 ? -1 : pathLength[jvex];
    }
```
