# de Rham 定理的 $k=0$ 情形：上同调数连通分支
`imp.derived-h0-from-de-rham` · 推出 · strong 边 · 根 `../`

`thm.de-rham` de Rham 定理 → `thm.de-rham-h0` 零次上同调

de Rham 定理给 $k = 0$ 的自然同构

$$\Phi^{0} : H^{0}_{\mathrm{dR}}(M) \longrightarrow H^{0}_{\mathrm{sing}}(M;\mathbb{R}), \qquad [\omega] \longmapsto \Bigl([c]\mapsto \int_{c}\omega\Bigr).$$

**右边直接算。** 奇异 $0$-链是点的形式和，所以 $0$-上链就是「给每个点一个实数」的函数；对一条道路 $\sigma$，

$$\delta^{0}f(\sigma) = f\bigl(\sigma(1)\bigr) - f\bigl(\sigma(0)\bigr).$$

> 续见 proofs/imp.derived-h0-from-de-rham.2.md
