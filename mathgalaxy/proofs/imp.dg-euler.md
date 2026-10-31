# 谱定理 $\implies$ Euler 公式
`imp.dg-euler` · 推出 · strong 边 · 根 `../`

`def.principal-curvature` 主曲率 + `def.weingarten-map` Weingarten 变换 → `thm.euler-formula-surface` Euler 公式

主方向标架下 $W(e_{1}) = k_{1}e_{1}$、$W(e_{2}) = k_{2}e_{2}$，且 $e_{1}\perp e_{2}$、$\lVert e_{1}\rVert = \lVert e_{2}\rVert = 1$（`thm.rodrigues` 给出特征向量的几何意义）。设单位向量 $V = \cos\theta\,e_{1}+\sin\theta\,e_{2}$，则

$$k_{n}(V) = \langle W(V), V\rangle = \Bigl\langle k_{1}\cos\theta\,e_{1}+k_{2}\sin\theta\,e_{2},\ \cos\theta\,e_{1}+\sin\theta\,e_{2}\Bigr\rangle = k_{1}\cos^{2}\theta+k_{2}\sin^{2}\theta .$$

最后一步只用 $e_{1}, e_{2}$ 的单位正交性：$\langle e_{1}, e_{2}\rangle = 0$ 把交叉项消掉。∎
