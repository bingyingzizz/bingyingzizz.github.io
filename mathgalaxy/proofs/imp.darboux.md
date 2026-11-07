# Poincaré 引理 + 局部流 $\implies$ Moser 同伦给出 Darboux 坐标
`imp.darboux` · 推出 · strong 边 · 根 `../`

`lem.poincare-lemma` Poincaré 引理 + `thm.flow-local` 局部流 → `thm.darboux` Darboux 定理

**① 闭形式找原函数**。取 $p$ 的球状图卡 $(U,x)$，在 $T_{p}M$ 上取辛基、用对偶坐标造出 $\omega_{0}=\sum_{i=1}^{n}dq_{i}\wedge dp_{i}$，使 $\omega_{0}(p)=\omega_{p}$。令 $\eta=\omega-\omega_{0}$：它闭，且 $\eta(p)=0$。$U$ 可缩、$k=2\ge1$，由 Poincaré 引理（`lem.poincare-lemma`）存在 $\theta\in\Omega^{1}(U)$ 使 $\eta=d\theta$。

> 续见 proofs/imp.darboux.2.md
