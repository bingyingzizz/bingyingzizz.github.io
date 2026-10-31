# 内射维数　`def.injective-dimension`　·　说明
根 `../`

**与投射维数完全对称**，但方向反了：消解朝**右**延伸，因为内射对象是「能接收映射」的那一侧。逐条对照：

- $\operatorname{id}_{R} M = 0 \iff M$ 内射；

- $\operatorname{id}_{R} M \le n \iff \operatorname{Ext}^{k}_{R}(N, M) = 0$ 对一切 $N$ 与 $k > n$ 成立（注意是**第二个**变量）；

- $\operatorname{id}_{R} M$ 等于使 $\operatorname{Ext}^{n}_{R}(-, M)$ 不全为零的最大 $n$。

**例子（$\mathbb{Z}$ 上）**：$\mathbb{Q}$ 内射（可除群）故 $\operatorname{id}_{\mathbb{Z}}\mathbb{Q} = 0$；$\mathbb{Z}$ 不内射，而 $0 \to \mathbb{Z} \to \mathbb{Q} \to \mathbb{Q}/\mathbb{Z} \to 0$ 是长度 $1$ 的内射消解，故 $\operatorname{id}_{\mathbb{Z}}\mathbb{Z} = 1$ ✓。

> 续见 notes/def.injective-dimension.2.md
