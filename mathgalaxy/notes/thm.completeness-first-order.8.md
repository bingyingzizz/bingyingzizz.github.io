# 完备性定理　`thm.completeness-first-order`　·　说明
根 `../`

**第六步：项模型。** 在 $\mathcal{L}^{+}$ 上，对闭项 $t,s$ 定义 $t\sim s\iff\Gamma^{*}\vdash t=s$；由 (E1)(E2) 这是等价关系。令 $A$ 为闭项的 $\sim$-类全体。常元 $c^{\mathfrak{A}}:=[c]$；函数符号 $f^{\mathfrak{A}}([t_1],\ldots,[t_n]):=[f(t_1,\ldots,t_n)]$；关系符号 $R^{\mathfrak{A}}([t_1],\ldots,[t_n])$ 为真 $\iff\Gamma^{*}\vdash R(t_1,\ldots,t_n)$。良定义用 (E2)：若 $t_i\sim s_i$，逐步代入得 $\Gamma^{*}\vdash f(t)=f(s)$ 与 $\Gamma^{*}\vdash R(t)\leftrightarrow R(s)$。等词解释成相等：$[t]=[s]\iff t\sim s$。

> 续见 notes/thm.completeness-first-order.9.md
