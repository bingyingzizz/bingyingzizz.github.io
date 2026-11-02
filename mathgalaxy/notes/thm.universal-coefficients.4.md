# 万有系数定理　`thm.universal-coefficients`　·　说明
根 `../`

合起来即得短正合列
$$0 \to \frac{Z_{n}\otimes A}{K} \to H_{n}(C\otimes A) \to \operatorname{Tor}_{1}^{R}\bigl(H_{n-1}(C), A\bigr) \to 0 ,$$
左端就是 $H_{n}(C)\otimes A$ ✓，正是要的那条 ✓。
**④ 分裂。** 第一条短正合列分裂，故 $Z_{n}\otimes A \to B_{n-1}\otimes A$ 可裂，于是 ③ 里的短正合列分裂 ✓。分裂的选法依赖 ① 中选定的截面，故一般**不自然** ✓。∎

⭐ **最常见的用法**：$A$ 取成域（$\mathbb{Z}$ 上的 $\mathbb{Q}$、域 $k$ 上的 $k$），$\operatorname{Tor}$ 项自动为零，于是

$$H_{n}(C\otimes_{R} k) \cong H_{n}(C)\otimes_{R} k ,$$

「系数扩张到域上」只是把同调张过去，**不产生新的类**。反过来，$A$ 有挠时多出来的那一块就来自低一次同调 —— 这正是万有系数定理真正的内容。

⚠️ **两条假设**：$R$ 主理想整环（保证子模自由）与 $C_{\bullet}$ 每项自由。一般环上要换成「上边缘 $B_{n}$ 都投射」（即复形逐层分裂），否则 ① 的第一步就断。

> 续见 notes/thm.universal-coefficients.5.md
