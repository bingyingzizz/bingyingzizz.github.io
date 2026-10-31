# Grothendieck 范畴有足够多内射　`prop.grothendieck-enough-injectives`　·　说明
根 `../`

**证明（超限迭代；Baer 判据的范畴版本）。** 记 $\mathcal{A}$ 是带生成元 $U$ 的 AB5 范畴。
- **判据**：$I$ 内射 $\iff$ 对每个单态射 $A\rightarrowtail B$ 与每个 $A\to I$，延拓 $B\to I$ 存在。因为 $U$ 是生成元，只需对**子对象** $A\rightarrowtail U$ 验证（一般的 $B$ 用一族 $U\to B$ 铺开、逐块延拓再拼）。
- **第一步**：$U$ 生成 $\implies$ 求值映射 $M\hookrightarrow U^{\operatorname{Hom}(U,M)}$ 是单态射（两个态射若在所有 $U\to M$ 上相同则相同），所以 $M$ 总能嵌进 $U$ 的一族积里。
- **第二步（补全延拓）**：设 $M_{0} := M$。给定 $M_{\alpha}$，把所有「待延拓数据」$\bigl(A\rightarrowtail U,\ A\to M_{\alpha}\bigr)$ 一次性推出去 —— 令 $M_{\alpha+1}$ 是 $M_{\alpha}$ 与 $\coprod_{(A,\varphi)}U$ 沿 $\coprod_{(A,\varphi)}A$ 的推出。于是每个从 $U$ 的子对象出发的映射都能在 $M_{\alpha+1}$ 里延拓到整个 $U$ 上。
- **极限序数**：取 $M_{\beta} := \varinjlim_{\alpha<\beta}M_{\alpha}$。$\m

> 续见 notes/prop.grothendieck-enough-injectives.3.md
