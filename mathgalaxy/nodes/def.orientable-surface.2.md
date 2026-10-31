# 可定向曲面　`def.orientable-surface`　·　续页（第 2 页）
[在星图里打开](../#n=def.orientable-surface)　·　第 1 页 [nodes/def.orientable-surface.md](./def.orientable-surface.md)

## 陈述（续）
先说清「曲面」在这里的意思：点集 $S\subseteq\mathbb{R}^{3}$ 叫**曲面**，如果它被一族正则参数化 $r_{\alpha} : U_{\alpha}\to S$ 覆盖，且重叠处的参数变换是微分同胚。单张参数化的
像（`def.regular-surface`）是特例，但球面、环面这类闭曲面必须用多张卡拼。
若存在**连续**的单位法向量场 $n : S\to\mathbb{R}^{3}$（每点 $n(p)\perp T_{p}S$、$\lVert n(p)\rVert = 1$），称 $S$ **可定向**，$n$ 叫它的一个**定向**，$(S,n)$ 叫**定向曲面**。等价说法：
- 存在覆盖 $S$ 的参数化族，使任意两张卡在重叠处的参数变换的 Jacobi 行列式 $>0$；
- 面积形式 $\omega^{1}\wedge\omega^{2}$ 可以在整张曲面上一致地选取（不换号）。

> 续见 [nodes/def.orientable-surface.3.md](./def.orientable-surface.3.md)
