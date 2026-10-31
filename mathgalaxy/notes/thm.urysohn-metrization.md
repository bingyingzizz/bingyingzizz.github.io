# 乌雷松度量化定理　`thm.urysohn-metrization`　·　说明
根 `../`

**证明（嵌入可分度量空间）**
1. **第二可数 $\implies$ Lindelöf**：每个开覆盖有可数子覆盖（对基元做筛子）。
2. **正则 $+$ Lindelöf $\implies$ 正规**：$T_{1}$ 与「点与闭集可分开」配上 Lindelöf 的逐点归纳，给出两个不交闭集可分开。于是 **Urysohn 引理可用**。
3. **挑可数多个分离函数**：取可数基 $\{\, B_{n} \,\}$。对每一对 $(m, n)$ 满足 $\operatorname{cl} B_{m} \subseteq B_{n}$，由 Urysohn 引理取连续函数
$$f_{m,n} : X \to [0, 1],\qquad f_{m,n}|_{\operatorname{cl} B_{m}} \equiv 0,\qquad f_{m,n}|_{X \setminus B_{n}} \equiv 1.$$
这样的函数只有可数多个，把它们按可数集编号成 $f_{k}$（$k \ge 1$）。
4. **嵌入**：令 $F : X \to [0, 1]^{\mathbb{N}}$，$F(x) := (\, f_{k}(x)/k \,)_{k \ge 1}$。$F$ 连续（每个分量连续，且级数一致收敛）；**单射**：$x \ne y$ 时正则性给出基元 $B_{n}$ 使 $x \in B_{n} \subseteq \operatorname{cl} B_{n} \subseteq X \setminus \{\, y \,\}$，于是某一对 $(m, n)$ 的 $f_{m,n}$ 把两者分开；**逆连续*

> 续见 notes/thm.urysohn-metrization.2.md
