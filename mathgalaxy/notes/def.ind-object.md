# Ind-对象　`def.ind-object`　·　说明
根 `../`

**读法**：引号里的 $\varinjlim X_{i}$ 是**形式记法** —— 对象是「滤过图」本身，不是它的余极限（余极限可能压根不存在）。

**公式为什么长这样**：要给两个形式余极限之间的映射，先固定 $j$，对每个 $i$ 给一条 $X_{i} \to Y_{j}$ 且与 $i$ 的变动相容（这就是 $\varprojlim_{i}$），再对 $j$ 取滤过余极限（$Y_{j}$ 越往后越大，晚给的映射可以「补」上早先的）。

**例子**：$\operatorname{Ind}(\mathbf{FinSet})$ 是「所有集合」（每个集合都是它有限子集的滤过余极限）；$K$-理论的「向量丛按直和/余极限补全」用的也是它。

📌 对偶地有 **Pro-对象**：把滤过图换成**余滤过**图，得到 $\operatorname{Pro}(\mathcal{C})$（profinite 空间就是 $\operatorname{Pro}(\mathbf{FinSet})$）。
