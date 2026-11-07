# 仿紧空间上的 Čech 就是上同调　`thm.paracompact-cech-equals-sheaf`　·　说明
根 `../`

**① 的证明。** 只需逐点看茎。固定 $x$，取 $i$ 使 $x \in U_{i}$。在茎上定义收缩同伦 $h^{p} : (\check{\mathcal{C}}^{p})_{x} \to (\check{\mathcal{C}}^{p-1})_{x}$：对 $\sigma \in (\check{\mathcal{C}}^{p})_{x}$ 令 $(h\sigma)_{i_{0} \cdots i_{p-1}} := \sigma_{i\,i_{0} \cdots i_{p-1}}$（其余分量取 $0$，在 $x$ 的充分小邻域里 $U_{i}$ 一直可用）。直接按 Čech 微分 $\delta$ 的符号计算得 $\delta h + h \delta = \operatorname{id}$（$p \ge 1$），而 $p = 0$ 时 $\delta h = \operatorname{id}$ 正是增广映射 $\mathcal{M}_{x} \to (\check{\mathcal{C}}^{0})_{x}$。所以增广复形 $0 \to \mathcal{M}_{x} \to (\check{\mathcal{C}}^{0})_{x} \to (\check{\mathcal{C}}^{1})_{x} \to \cdots$ 正合；逐点正合即层正合。取整体截面：$\Gamma(X, \check{\mathcal{C}}^{p}) = \check{C}^{p}(\mathfrak{U}, \mathcal{M})$，故其同调就是 $\check{H}^{\bullet}(\mathfrak{U}, \mathcal{M})$。

> 续见 notes/thm.paracompact-cech-equals-sheaf.3.md
