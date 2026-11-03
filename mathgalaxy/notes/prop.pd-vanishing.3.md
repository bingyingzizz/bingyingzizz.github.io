# 投射维数与消失　`prop.pd-vanishing`　·　说明
根 `../`

⚠️ **$n = 0$ 的情形**：$\mathrm{pd} M \le 0$ $\iff$ $M$ 投射 $\iff$ $\operatorname{Ext}^{k}(M,-) = 0$ 对所有 $k \ge 1$。别把「$\operatorname{Ext}^{1} = 0$ 就投射」当成对**任意** $n$ 都有：只有 $n = 0$（即 $\operatorname{Ext}^{1}$）这一档如此。

**各方向用到的假设**（模范畴中的维数转移判据）：
- (1) $\iff$ 存在长度 $n$ 的投射消解是定义；若 (2) 指任意已选消解的第 $n$ 合冲，则独立于消解的结论还需 Schanuel 引理或维数转移，不能全算作定义。
- (2) $\implies$ (3)：截断投射消解并用它计算 $\operatorname{Ext}$，须用消解计算定理；(3) $\implies$ (4) 只是取 $k=n+1$，免费。
- (4) $\implies$ (2)：维数转移把条件化为 $\operatorname{Ext}^1(\Omega^nM,N)=0$ 对所有 $N$ 成立，再由短正合列分裂判投射；模范畴有足够多投射，不要求环是 PID。
- 对所有 $N$ 的量词不能改成某个 $N$：取 $N=0$ 时消失对任意 $M$ 成立；例如 $\mathbb Z/2$ 并非投射 $\mathbb Z$-模。

> 续见 notes/prop.pd-vanishing.4.md
