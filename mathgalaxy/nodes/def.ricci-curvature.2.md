# Ricci 曲率　`def.ricci-curvature`　·　续页（第 2 页）
[在星图里打开](../#n=def.ricci-curvature)　·　第 1 页 [nodes/def.ricci-curvature.md](./def.ricci-curvature.md)

## 陈述（续）
$$\operatorname{Ric}(X,Y) := \operatorname{tr}\bigl(Z\mapsto R(Z,X)Y\bigr) = \sum_{k}\langle R(e_{k},X)Y,e_{k}\rangle ,$$

其中 $\{e_{k}\}$ 是任意单位正交基（取迹与基无关，这正是 `def.trace` 的相似不变性）。分量写成
$$R_{ij} := R^{k}_{\ kij} = g^{k\ell}R_{kij\ell} .$$

再缩并一次得**数量曲率**

$$S := \operatorname{tr}_{g}\operatorname{Ric} = g^{ij}R_{ij} .$$

二维时曲率只有一个独立分量，于是两者都被高斯曲率决定：
$$R_{ij} = K\,g_{ij},\qquad S = 2K,\qquad R_{1221} = K\det(g_{ij}).$$

> 续见 [nodes/def.ricci-curvature.3.md](./def.ricci-curvature.3.md)
