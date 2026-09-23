# 单射 / 满射 / 双射　`def.bijection`
单射 / 满射 / 双射（Injective / Surjective / Bijective）
layer 6 · 定义 · 关系与函数 · 集合论

设 $f : A \to B$。

- $f$ **单射**（injective）：$f(a) = f(a') \implies a = a'$，即不同输入给不同输出；
- $f$ **满射**（surjective）：$\forall b \in B, \exists a \in A : f(a) = b$，即 $f(A) = B$；
- $f$ **双射**（bijective）：既单又满。

双射 $f : A \to B$ 的**逆** $f^{-1} : B \to A$ 也是双射（把 $f$ 看作关系时，逆关系就是 $f^{-1}$）。
> 陈述续见 `nodes/def.bijection.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.function` 函数：用到了定义 函数　proofs/dep.function-bijection.md
- `def.pair` 有序对：用到了定义 有序对　proofs/dep.pair-bijection.md

## 它能推出什么 / 谁在用它
- 被 `def.countable` 可数与不可数 用
- 被 `def.equinumerous` 等势 用
- 被 `thm.schroder-bernstein` Schröder–Bernstein 定理 用
- ⇒ `thm.schroder-bernstein` Schröder–Bernstein 定理

- …另有出边，续页见 `nodes/def.bijection.3.md`

refs: Kunen, Set Theory, I.5

> 说明见 `notes/def.bijection.md`
