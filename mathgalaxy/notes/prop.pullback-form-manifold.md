# 拉回　`prop.pullback-form-manifold`　·　说明
根 `../`

**证明的路线**：$T_{p}M$ 上的交错型在坐标基 $\mathrm{d}x^{I}$ 上线性展开，于是只需在单项 $\omega = \mathrm{d}y^{I}$ 上验 —— 而那正是链式法则加「$\mathrm{d}^{2}=0$」的机械计算，再用上一句的线性拼回去。骨架在边上。

**它和「$\mathrm{d}$ 良定」互为因果**：开集间那条（`prop.pullback-forms`）已经证过 (3)，流形上用图卡局部化即可；反过来，正因为 $\mathrm{d}$ 与拉回交换、而拉回只用链式法则定义，$\mathrm{d}$ 才不依赖坐标（`prop.exterior-derivative-manifold`）。

两条一起看，才知道谁也不是循环论证 —— 开集上的 (3) 是初等的。

⭐ 这一条是 de Rham 上同调「是函子」的全部内容：$F$ 光滑 $\implies$ $F^{\ast}$ 与 $\mathrm{d}$ 交换 $\implies$ $F^{\ast}$ 下到商空间，得 $F^{\ast} : H^{k}_{\mathrm{dR}}(N)\to H^{k}_{\mathrm{dR}}(M)$。

方向是反的，这正是「上同调反变」的意思。

> 续见 notes/prop.pullback-form-manifold.2.md
