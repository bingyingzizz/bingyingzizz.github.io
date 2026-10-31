# $(1,1)$ 型缩并就是取迹
`imp.derived-trace-from-contraction` · 推出 · strong 边 · 根 `../`

`def.tensor-contraction` 缩并 → `def.trace` 迹

**顺带得到 $\operatorname{tr}(AB) = \operatorname{tr}(BA)$。** 缩并按哪一个上标与哪一个下标配对来定义；而求和号 $\sum_{a} T^{\ldots a \ldots}_{\ldots a \ldots}$ 里的哑标可以任意换名 —— 换成另一对上下标就是另一种缩并，在 $A B$ 上分别算得 $\operatorname{tr}(AB)$ 与 $\operatorname{tr}(BA)$。两者是同一个张量的同一组求和指标的重排，故相等。$\blacksquare$

> 蓝色定义线 `dep.mf2-trace-contraction` 说的是「取迹要用缩并这个定义」；这条粉边说的是反向的识别：取迹就是缩并的最简单一格。
