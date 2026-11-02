# 离散空间上零调　`prop.condab-discrete-acyclic`　·　说明
根 `../`

**证明。**
**1.** 离散空间是点的不交并：$E = \coprod_{e \in E}\{e\}$。而上同调把不交并换成**积**：
$$H^{n}\Bigl(\coprod_{i} X_{i},\ M\Bigr) \cong \prod_{i} H^{n}(X_{i},\ M) ✓$$
单点的情形是零：$\{e\} = *$，它的自由对象是 $\mathbb{Z}[*] = \mathbb{Z}$（投射），故 $H^{n}(*, M) = \operatorname{Ext}^{n}_{\mathbb{Z}}(\mathbb{Z}, M) = 0$（$n > 0$）✓。于是离散空间上高次全为零 ✓。
**2.** $E$ 离散时 $E \times S = \coprod_{e \in E} S$ 是 $S$ 的**不交并**，再一次用「不交并 $\implies$ 积」：
$$H^{n}(E \times S,\ M) \cong \prod_{e \in E} H^{n}(S,\ M) = 0 \qquad (n > 0),$$
末一步用的是「Stonean 空间上凝聚态阿贝尔群零调」✓。∎

⭐ 一句话：**零调性从 Stonean 传给「离散 $\times$ Stonean」**。这就是 $\mathbb{N} \times S$、$\mathbb{Z} \times S$ 这类混合空间上没有高次上同调的原因。
