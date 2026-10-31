# 万有系数定理　`thm.universal-coefficients`　·　说明
根 `../`

⭐ **最常见的用法**：$A$ 取成域（$\mathbb{Z}$ 上的 $\mathbb{Q}$、域 $k$ 上的 $k$），$\operatorname{Tor}$ 项自动为零，于是

$$H_{n}(C\otimes_{R} k) \cong H_{n}(C)\otimes_{R} k ,$$

「系数扩张到域上」只是把同调张过去，**不产生新的类**。反过来，$A$ 有挠时多出来的那一块就来自低一次同调 —— 这正是万有系数定理真正的内容。

⚠️ **两条假设**：$R$ 主理想整环（保证子模自由）与 $C_{\bullet}$ 每项自由。一般环上要换成「上边缘 $B_{n}$ 都投射」（即复形逐层分裂），否则 ① 的第一步就断。

📌 同一条定理有**上同调版本**（$0 \to \operatorname{Ext}^{1}(H_{n-1}(C), A) \to H^{n}(\operatorname{Hom}(C, A)) \to \operatorname{Hom}(H_{n}(C), A) \to 0$），两项的角色由 $\operatorname{Tor}$ 换成 $\operatorname{Ext}$。
