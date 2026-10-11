# Pontryagin 对偶的 RHom 刻画　`prop.dual-rhom-characterization`　·　说明
根 `../`

**在说什么。** 经典的 Pontryagin 对偶 $M^{\vee} = \operatorname{Hom}_{\mathrm{cts}}(M, T)$ 说的是「取到圆里的连续同态」。这条给出它在**导出层面**的三种等价写法 —— 于是「取对偶」这个操作可以在导出的世界里做，进而参与 RHom / 张量的计算。

**三条为什么互相相容**。用 $0 \to \mathbb{Z} \to \mathbb{R} \to T \to 0$：对**紧**的 $M$，$\operatorname{RHom}(M, \mathbb{R}) = 0$（紧 $	o$ Banach 全零），于是 $\operatorname{RHom}(M, T) \cong \operatorname{RHom}(M, \mathbb{Z})[1]$，第二条就是这么来的。

**注意三种情形的「位移」不同**：紧的情形多一个 $[1]$、Banach 的情形换成靶 $\mathbb{R}$。这说明「对偶」在导出层面不是一个统一的操作 —— 具体走哪条，取决于 $M$ 属于哪一类。

📌 **用法**：把「算 Pontryagin 对偶」归约成「算 RHom」，而 RHom 有 Breen–Deligne 谱序列与逐类归零定理可用。
