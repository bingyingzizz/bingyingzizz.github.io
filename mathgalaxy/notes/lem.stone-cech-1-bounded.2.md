# Stone 满射的 Čech 复形 1-有界零调　`lem.stone-cech-1-bounded`　·　说明
根 `../`

**证明。** 三步归约。
- **归约到 $M$ 离散**：Stone 空间写 $S_{0} = \varprojlim_{k} S_{0,k}$（$S_{0,k}$ 有限），$S_{k}$ 为它在 $S$ 里的像，则
$$\varinjlim_{k} \check{C}^{\bullet}\bigl((S_{0,k}\to S_{k})^{+}, M\bigr) = \check{C}^{\bullet}\bigl((S_{0}\to S)^{+}, M^{\mathrm{disc}}\bigr) \hookrightarrow \check{C}^{\bullet}\bigl((S_{0}\to S)^{+}, M\bigr),$$
左端的直极限拓扑就是**上确界范数**拓扑；而 $C(S, M^{\mathrm{disc}})$ 在 $C(S, M)$ 里**稠密**（极不连通性给出有限不交闭开细化，在每块上取常值逼近）。配上「$K$-有界正合在完备化下不变」与「滤过余极限保持 $K$-有界」，只需证**离散那一个**复形 $1$-有界零调（对它自己的拓扑）。
- **归约到 $S, S_{0}$ 有限**：同一个余极限再把离散情形化归到有限。
- **有限情形**：由「有截面的态射给出零调」，$\check{C}^{\bullet}\bigl((S_{0}\to S)^{+}, M\bigr)$ 是**零伦**的，且零伦有形式 $h^{n} : f \mapsto f \circ k_{n}$（逐纤维取一个截面点），于是 $

> 续见 notes/lem.stone-cech-1-bounded.3.md
