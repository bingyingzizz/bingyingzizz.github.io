# Poincaré 引理 + 局部流 $\implies$ Moser 同伦给出 Darboux 坐标
`imp.darboux` · 推出 · strong 边 · 根 `../`

`lem.poincare-lemma` Poincaré 引理 + `thm.flow-local` 局部流 → `thm.darboux` Darboux 定理

**② Moser 同伦**。令 $\omega_{t}=\omega_{0}+t\eta$。$\eta(p)=0$ 使 $\omega_{t}(p)$ 与 $t$ 无关；非退化性是开条件而 $[0,1]$ 紧，故可再缩小 $U$，使**所有** $\omega_{t}$ 都非退化。于是每点有唯一 $X_{t}$ 满足 $\iota_{X_{t}}\omega_{t}=-\theta$，且 $(t,x)\mapsto X_{t}(x)$ 光滑（$\omega_{t}$ 光滑、逆映射由 Cramer 公式光滑）。

> 续见 proofs/imp.darboux.3.md
