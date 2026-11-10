# 闭链上的积分 $\implies$ de Rham 上同调与奇异上同调同构
`imp.mf2-de-rham` · 推出 · strong 边 · 根 `../`

`def.de-rham-complex` de Rham 上同调 + `def.singular-chain` 奇异链 + `def.integral-on-chain` 链上的积分 + `thm.stokes` Stokes 定理 + `thm.stokes-chain` 链上的 Stokes 定理 + `lem.poincare-lemma` Poincaré 引理 + `thm.paracompact-cech-equals-sheaf` 仿紧空间上的 Čech 就是上同调 → `thm.de-rham` de Rham 定理

⚠️ **「有正合消解」推不出「复形上同调 $=$ 全局层上同调」**：还需要每个 $\Omega^{q}$ **无环**。这一步靠两件事：$\Omega^{q}$ 是**细层**（单位分解能把截面局部搬移），而细层在**仿紧**空间上无高阶上同调。于是谱序列 $E_{2}^{p,q} = H^{p}(M;\Omega^{q}) \implies H^{p+q}_{\mathrm{dR}}(M)$ 坍塌在 $q = 0$ 一列：

$$H^{k}_{\mathrm{dR}}(M) \cong H^{k}(M;\underline{\mathbb{R}}) .$$

⚠️ **仿紧不能省**（单位分解要用它）：本图的流形定义含第二可数 $+$ Hausdorff，故仿紧 $\checkmark$。

> 续见 proofs/imp.mf2-de-rham.6.md
