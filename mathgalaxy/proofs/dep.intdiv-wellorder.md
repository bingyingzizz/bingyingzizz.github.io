# 整数良序给出带余除法的存在性
`dep.intdiv-wellorder` · 推出 · strong 边 · 根 `../`

`def.wellorder` 良序集 → `thm.int-division` 整数的带余除法

先设 $b>0$。集合 $S=\{\, a-qb : q\in\mathbb{Z},\ a-qb\ge 0 \,\}$ 非空（Archimedes 性质保证可取到使 $qb>a$ 的 $q$），由 $\mathbb{N}$ 的良序取 $r=\min S$，写 $r=a-qb$。若 $r\ge b$，则 $r-b=a-(q+1)b\ge0$ 且更小，与最小性矛盾；故 $0\le r<b$。$b<0$ 时把 $b$ 换成 $|b|$、$q$ 换成 $-q$ 即化归。唯一性见节点注。∎

> **跨区域桥（order-theory $\leftrightarrow$ number）**：存在性一步用的是 $\mathbb{N}$ 的良序（取最小非负余数），这是**证明依赖**而不是定义依赖 —— 带余除法的陈述里没有良序。
