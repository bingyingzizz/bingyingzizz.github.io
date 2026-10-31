# 在正交基上取迹 $\implies$ 二维 Ricci $= Kg$、数量曲率 $= 2K$
`imp.tu-ricci` · 推出 · strong 边 · 根 `../`

`def.curvature-tensor` 黎曼曲率张量 + `def.trace` 迹 → `def.ricci-curvature` Ricci 曲率

**迹与基无关。** $Z\mapsto R(Z,X)Y$ 是 $T_{p}M$ 上的线性映射，它的迹在换基时不变（`def.trace` 的相似不变性），故用单位正交基算迹合法。

**二维的计算。** 取 $g$-单位正交基 $e_{1},e_{2}$，于是 $\det(g_{ij}) = 1$、$K = R_{1221}$。由定义 $R_{ij} = \sum_{k}\langle R(e_{k},e_{i})e_{j},e_{k}\rangle$，逐项算：

$$R_{11} = \langle R(e_{2},e_{1})e_{1},e_{2}\rangle = R_{2112} = R_{1221} = K ,$$

（中间两步用两次反称性：$R_{2112} = -R_{1212} = R_{1221}$）。同理 $R_{22} = K$；而 $R_{12} = \sum_{k}\langle R(e_{k},e_{1})e_{2},e_{k}\rangle = 0$，因为 $k = 1$ 时第一对指标相同、$k = 2$ 时后一对指标相同。于是

$$R_{ij} = K\,g_{ij},\qquad S = g^{ij}R_{ij} = 2K .$$

> 续见 proofs/imp.tu-ricci.2.md
