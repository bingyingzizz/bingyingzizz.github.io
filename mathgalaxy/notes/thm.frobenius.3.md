# Frobenius 定理　`thm.frobenius`　·　说明
根 `../`

后一式说明：横截超曲面 $S=\{y^{1}=0\}$ 上的分布 $\mathcal{D}_{S}=\operatorname{span}\{Y_{2},\ldots,Y_{k}\}$ 对合（秩 $k-1$）。
4. 对 $k$ 归纳（$k=1$ 时 $\partial_{1}$ 本身就是答案）。由归纳假设，$S$ 上有坐标 $(x^{2},\ldots,x^{n})$ 使 $\mathcal{D}_{S}$ 由 $\partial_{2},\ldots,\partial_{k}$ 生成。用 $X_{1}=\partial_{1}$ 的流把 $S$ 的坐标沿 $x^{1}$ 方向平移，得到 $p$ 邻域上的坐标 $(x^{1},x^{2},\ldots,x^{n})$。
5. 在这组坐标里 $[\partial_{1},\partial_{a}]=0$（$a\ge2$），把 $Y_{i}$ 写成 $Y_{i}=\sum_{a\ge2}f^{a}_{i}\,\partial_{a}$；由 $[\partial_{1},Y_{i}]\in\operatorname{span}\{Y_{j}\}$ 没有 $\partial_{1}$ 分量、且 $[\partial_{1},\partial_{a}]=0$，得到 $\partial_{1}f^{a}_{i}=0$。在 $x^{1}=0$ 的切片上 $Y_{i}=\partial_{i}$（$i=2,\ldots,k$ 由归纳假设），故 $f^{a}_{i}=\delta^{a}_{i}$ 与 $x^{1}$ 无关，即 $Y_{i}=\partial_{i}$ 在整个邻域成立。于是

> 续见 notes/thm.frobenius.4.md
