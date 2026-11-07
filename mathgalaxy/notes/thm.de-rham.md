# de Rham 定理　`thm.de-rham`　·　说明
根 `../`

**本节点仍标 skeleton**：de Rham 定理在本图没有逐字证明。下面把证明拆成六步，明确标出哪一步本图可完整验证、哪一步需要外部定理（并写明缺的是哪条），以便将来补节点时逐条对账。
**第 0 步：约定。** 光滑奇异链 $C^{\infty}_{\bullet}(M)$：每个单形 $\sigma:\Delta^{k}\to M$ 光滑、且延拓到 $\Delta^{k}$ 的一个棱柱邻域（于是每个面光滑）。$\Omega^{q}$ 是 $q$-形式层，$\mathrm{d}$ 是层复形微分。$\Gamma(M,\Omega^{\bullet})=\Omega^{\bullet}(M)$ 是 de Rham 复形。
**第 1 步：配对良定义（本图可完整验证）。** 先注意 $\int_{c}\omega$ 对**连续**奇异链没有定义（$c$ 未必光滑，$\omega$ 只在光滑切向量上有值），所以换到光滑奇异链。两条不变性都来自 `thm.stokes-chain`：$\omega$ 闭、$c=\partial b$ 时 $\int_{c}\omega=\int_{b}\mathrm{d}\omega=0$；$\omega=\mathrm{d}\eta$ 时 $\int_{c}\mathrm{d}\eta=\int_{\partial c}\eta=0$（$c$ 为闭链）。于是 $\Phi^{k}([\omega])([c])=\int_{c}\omega$ 良定义，且显然 $\mathbb{R}$-双线性。


> 续见 notes/thm.de-rham.2.md
