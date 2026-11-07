# Mittag-Leffler 定理　`thm.mittag-leffler`　·　说明
根 `../`

*证明。* 由定义，补集包含于 $\{\operatorname{dist}(z,\partial\Omega)<1/n\}\cup\{|z|>n\}$。集合 $\{|z|>n\}$ 整个落在补集里且连通无界，所以任何与它相交的补集分支必无界；于是有界分支必含于 $\{\operatorname{dist}<1/n\}$。而 $\{\operatorname{dist}<1/n\}=\bigcup_{w\in\partial\Omega}B(w,1/n)$，它的每个连通分支都是若干个这种球的并、因而含某个球心 $w\in\partial\Omega$；该分支落在补集里，故它就是所在补集分支的一部分。$\square$

**第 2 步：Runge 逼近（预先指定极点）。** 本图 `thm.runge` 的陈述是：$K\subset\Omega$ 紧、$f$ 在 $K$ 的某邻域全纯，则 $f$ 在 $K$ 上可被有理函数一致逼近，且极点可**预先指定**在 $\mathbb{C}\setminus K$ 的每个连通分支里各取一点。下面只用它的这个形式。

> 续见 notes/thm.mittag-leffler.4.md
