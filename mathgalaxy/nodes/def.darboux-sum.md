# 上和与下和　`def.darboux-sum`
上和 $U(f, P)$ 与下和 $L(f, P)$
layer 15 · 定义 · Riemann 积分 · 数学分析
[在星图里打开](../#n=def.darboux-sum)　·　[节点索引](../index.md)

设 $f$ 在 $[a, b]$ 上有界，$P = \{ x_0 < \cdots < x_n \}$ 是分割。记

$$M_i := \sup_{x \in I_i} f(x), \qquad m_i := \inf_{x \in I_i} f(x), \qquad \omega_i := M_i - m_i$$

（$M_i$ 是 $f$ 在第 $i$ 段上的**上确界**，$m_i$ 是下确界，$\omega_i$ 是**振幅**。）**上和**与**下和**定义为

$$U(f, P) := \sum_{i=1}^{n} M_i\,\Delta x_i, \qquad L(f, P) := \sum_{i=1}^{n} m_i\,\Delta x_i$$

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.darboux-sum.2.md](./def.darboux-sum.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.darboux-sum.3.md](./def.darboux-sum.3.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 6

> 说明见 `notes/def.darboux-sum.md`

引用：`def.darboux-sum`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
