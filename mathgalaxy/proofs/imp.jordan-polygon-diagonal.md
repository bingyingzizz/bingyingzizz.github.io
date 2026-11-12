# 对角线引理：多边形三角剖分的归纳步
`imp.jordan-polygon-diagonal` · 推出 · strong 边 · 根 `../`

`lem.polygon-diagonal` 简单多边形的对角线 → `thm.jordan-polygon` 多边形 Jordan 定理

对顶点数 $n$ 归纳。由 `lem.polygon-diagonal` 取一条对角线 $[a,b]$，它把 $P$ 分成两个边数更少（$n_1,n_2<n$）的简单多边形 $P_1,P_2$。由归纳假设 $P_i$ 各有三角剖分 $\Gamma_i$，其并加上 $[a,b]$ 就是 $P$ 的三角剖分：三角形个数 $(n_1-2)+(n_2-2)=n-2$，两两内部不交，且并的边界恰为 $P$。∎
