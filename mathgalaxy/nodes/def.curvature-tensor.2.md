# Riemann 曲率张量　`def.curvature-tensor`　·　续页（第 2 页）
[在星图里打开](../#n=def.curvature-tensor)　·　第 1 页 [nodes/def.curvature-tensor.md](./def.curvature-tensor.md)

## 陈述（续）
率。它是内蕴的：公式里只出现 $g$ 与它的导数，没有法向、没有第二基本形式。
曲面上的 Levi-Civita 联络定义**曲率算子**

$$R(X,Y)Z = \nabla_{X}\nabla_{Y}Z-\nabla_{Y}\nabla_{X}Z-\nabla_{[X,Y]}Z,$$
在坐标下记 $R(\partial_{i},\partial_{j})\partial_{k} = R^{\ell}_{ijk}\partial_{\ell}$，其中
$$R^{\ell}_{ijk} = \partial_{i}\Gamma^{\ell}_{jk}-\partial_{j}\Gamma^{\ell}_{ik}+\Gamma^{\ell}_{ip}\Gamma^{p}_{jk}-\Gamma^{\ell}_{jp}\Gamma^{p}_{ik},$$
并降下标 $R_{ijk\ell} = g_{\ell p}R^{p}_{ijk}$。它满足

$$R_{ijk\ell} = -R_{jik\ell} = -R_{ij\ell k} = R_{k\ell ij},\qquad R_{ijk\ell}+R_{jki\ell}+R_{kij\ell} = 0$$
（后者是**第一比安基恒等式**）。**平坦判据**：$R\equiv0$ 当且仅当每点附近有坐标使 $g_{ij} = \delta_{ij}$，即曲面局部等距于平面。

> 续见 [nodes/def.curvature-tensor.3.md](./def.curvature-tensor.3.md)
