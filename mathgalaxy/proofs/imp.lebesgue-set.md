# 微分定理 + 可数稠密子集 $\implies$ Lebesgue 集几乎处处
`imp.lebesgue-set` · 推出 · strong 边 · 根 `../`

`thm.lebesgue-differentiation` Lebesgue 微分定理 → `thm.lebesgue-set-full` Lebesgue 集几乎处处

**① 对每个复数 $c$ 用一次微分定理。** 固定 $c \in \mathbb{C}$，把微分定理用在函数 $h(x) = |f(x) - c|$ 上（它是 $L^{1}_{l}oc$ 的）：存在零集 $E_c$，使对 $x \notin E_c$，

$$\lim_{r\to0} \frac{1}{m(B(r,x))} \int_{B(r,x)} |f(y) - c| dy = |f(x) - c|$$

**② 只取可数多个 $c$。** 取 $\mathbb{C}$ 的一个**可数稠密子集** $D$（比如 $\mathbb{Q} + i\mathbb{Q}$），令

$$E = \bigcup_{c \in D} E_c$$

可数多个零集之并仍是零集，故 $m(E) = 0$。

**③ 在 $E$ 外验证**。设 $x \notin E$，任给 $\varepsilon > 0$，取 $c \in D$ 使 $|f(x) - c| < \varepsilon$。则

> 续见 proofs/imp.lebesgue-set.2.md
