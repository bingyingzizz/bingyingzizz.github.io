# Grothendieck 宇宙　`def.universe`　·　说明
根 `../`

**宇宙存在**是一条额外的公理（Grothendieck 公理），不在 ZFC 里。

它的用处是给「大」与「小」一个**相对**的标准：$U$ 里的东西叫小，$U$ 本身叫大。$\mathbf{Set}$、$\mathbf{Grp}$ 这些范畴的对象全体不构成集合，但相对于一个宇宙它们都是小的 —— 「小范畴」这个词背后就是这件事。

封装的四条足够把常见构造全搬进 $U$：由 2 取 $x = y$ 得单点集，再取一次得有序对 $\{ \{x\}, \{x,y\} \}$；由 3、4 得笛卡尔积（$A \times B \subseteq \mathcal{P}(\mathcal{P}(A \cup B))$）与函数集。
