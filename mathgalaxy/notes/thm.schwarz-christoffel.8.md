# Schwarz–Christoffel 公式　`thm.schwarz-christoffel`　·　说明
根 `../`

（iii）**参数/边长匹配**：即便（i）（ii）证得 $F$ 单叶，$F$ 映出的多边形仍由积分决定 —— 其边长是 $x_{k}$ 的函数，一般**不等于**给定多边形的边长（同一组内角可以对应无穷多个形状）。要得到题设的**那一个**多边形，还须解 $n-3$ 个实方程（$x_{k}$ 的 Möbius 自由度）：证明边长映射取遍所有可能的形状。标准做法是连续性方法/度理论（或先由 Riemann 映射定理取到某个多边形，再用形式唯一性反推 $x_{k}$）。本图没有这条连续性论证的节点；`thm.riemann-mapping` 已完整，但 `thm.boundary-correspondence` 本身仍是 skeleton。

（i）与（iii）各需要一条外部引理，本图都没有节点、也没有写全，故不勾 ∎：

**引理 A（Carathéodory–Osgood，Jordan 区域情形）**：Jordan 区域到单位圆盘的共形映射连续延拓为闭包同胚（这就是 `thm.boundary-correspondence` 的内容，该节点仍 skeleton）。多边形是 Jordan 区域，故 $F$ 的边界对应成立。

> 续见 notes/thm.schwarz-christoffel.9.md
