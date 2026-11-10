# 自由群的泛性质　`def.free-group-universal`　·　说明
根 `../`

**含义**：给自由群一个同态，等价于给生成元集合一个到目标群的任意映射；生成元之间没有需要满足的关系。

**唯一性**：由 $\tilde f(s)=\iota(s)$ 与同态性，$\tilde f(s^{\varepsilon})=f(s)^{\varepsilon}$，于是 $\tilde f$ 在生成元上被唯一确定；存在性由字的乘法直接验证。

**伴随**：泛性质正是「$F$ 是遗忘函子 $U:\mathbf{Grp}\to\mathbf{Set}$ 的左伴随」的定义（见 `def.adjoint`）：单位 $\iota$ 给出 $\operatorname{Hom}(F(S),G)\cong\operatorname{Hom}(S,U(G))$。

⚠ 若只要求「存在」而不要求「唯一」，则任何包含 $S$ 的群都满足，泛性质就不再刻画自由群。
