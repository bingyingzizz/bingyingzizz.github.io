# 法坐标下的三阶偏导抵消 $\implies$ 第二比安基恒等式
`imp.tu-bianchi` · 推出 · strong 边 · 根 `../`

`def.curvature-tensor` 黎曼曲率张量 + `prop.curvature-tensor-symmetries` 曲率张量的对称性 → `thm.bianchi-identity` 比安基恒等式

**第二比安基。** 取 $p\in M$ 处的**法坐标**（指数映射给的坐标，见 `def.exponential-map`）：$\Gamma^{k}_{ij}(p) = 0$、$\partial_{i}g_{jk}(p) = 0$，于是 $p$ 处 $\nabla_{i} = \partial_{i}$，且由 $R^{\ell}_{ijk} = \partial_{i}\Gamma^{\ell}_{jk}-\partial_{j}\Gamma^{\ell}_{ik}$ 与 $\Gamma$ 的公式得

$$R_{ijk\ell} = \frac{1}{2}\bigl(\partial_{i}\partial_{k}g_{j\ell}-\partial_{i}\partial_{\ell}g_{jk}-\partial_{j}\partial_{k}g_{i\ell}+\partial_{j}\partial_{\ell}g_{ik}\bigr).$$

> 续见 proofs/imp.tu-bianchi.2.md
