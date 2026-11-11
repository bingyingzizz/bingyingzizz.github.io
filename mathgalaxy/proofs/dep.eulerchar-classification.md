# 标准形上用 $\chi$ 区分曲面
`dep.eulerchar-classification` · 推出 · strong 边 · 根 `../`

`thm.euler-characteristic` Euler 示性数 → `thm.classification-surfaces` 闭曲面分类定理

分类定理第三步在标准形上读不变量：可定向性与 $\chi$。要断言「$\chi$ 不同则不同胚」，必须先知道 $\chi$ 是同胚不变量 —— `thm.euler-characteristic` 给出 $\chi(K)=\sum_{p}(-1)^{p}\alpha_{p}=\sum_{p}(-1)^{p}\beta_{p}$，右端只依赖同调型，于是同伦等价（从而同胚）保持 $\chi$。同一等式还让「由三角剖分数出的 $\chi$」与「由 Betti 数算出的 $\chi$」对接，标准形与任意剖分才可比较。∎

> 不同胚性用 $\chi$ 作不变量（$\chi$ 在同胚下不变）。这条用**定理**当原理：`thm.euler-characteristic` 说「数单纯形 = 数 Betti 数」，正好给出 $\chi$ 的组合与同调两种算法。
