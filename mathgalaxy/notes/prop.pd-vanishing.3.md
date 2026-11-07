# 投射维数与消失　`prop.pd-vanishing`　·　说明
根 `../`

- (1) $\iff$ (2)：**固定一条消解**时是定义展开（$\mathrm{pd} \le n$ 就是「有长度 $n$ 的投射消解」）；但「第 $n$ 合冲投射」要**跨消解**才成陈述，靠的是 **Schanuel 引理 / 合冲稳定性**（`prop.syzygy-stability`），不是定义展开。
- (2) $\implies$ (3)：**这一步是真内容**。用投射消解 $\cdots \to P_{1} \to P_{0} \to M \to 0$ 算 $\operatorname{Ext}$：$\operatorname{Ext}^{k}(M,N)$ 是消解上同调，而长度 $n$ 的消解在 $k > n$ 处没有项，故为零。⚠️ 这里要用「**投射消解可用来算 $\operatorname{Ext}$**」这一条（维数偏移/平衡性），它本身要证。
- (3) $\implies$ (4)：**特例**（$k = n+1$）。
- (4) $\implies$ (2)：**这一步要用「维数偏移」反向**：若 $\operatorname{Ext}^{n+1}(M, -)$ 恒为零，取一个长度 $n$ 的部分消解，其第 $n$ 合冲 $K$ 满足 $\operatorname{Ext}^{1}(K, -) = 0$，于是 $K$ 投射（`prop.ext-projective-vanishes` 的反向）。**⚠️ 这一步用到「$\operatorname{Ext}^{1} = 0 \implies$ 投射」在模范畴里成立**

> 续见 notes/prop.pd-vanishing.4.md
