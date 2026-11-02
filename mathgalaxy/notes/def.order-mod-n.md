# 模 n 的阶　`def.order-mod-n`　·　说明
根 `../`

$\operatorname{ord}_{n}(a)$ 就是群论里 $[a]$ 在单位群 $(\mathbb{Z}/n\mathbb{Z})^{\times}$ 中的**元素阶** —— 两个概念完全同一个东西，只是坐标不同。



性质（全部由群论直接搬来）：



- $\operatorname{ord}_{n}(a) \mid \varphi(n)$（Lagrange）；

- $a^{k} \equiv 1 \iff \operatorname{ord}_{n}(a) \mid k$；

- $\operatorname{ord}_{n}(a^{t}) = \dfrac{\operatorname{ord}_{n}(a)}{\gcd(t, \operatorname{ord}_{n}(a))}$。



前两条合起来说明「指数」这个概念在模算术里是完全良性的 —— 只要底数与 $n$ 互素。
