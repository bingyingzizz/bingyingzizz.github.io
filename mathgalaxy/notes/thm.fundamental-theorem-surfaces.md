# 曲面论基本定理　`thm.fundamental-theorem-surfaces`　·　说明
根 `../`

⭐ **为什么 Gauss–Codazzi 恰好是充要条件**：结构方程 $\mathrm{d}r = \sum_{i}\omega^{i}e_{i}$、$\mathrm{d}e_{i} = \sum_{j}\omega^{j}_{\ i}e_{j}$ 是关于 $(r, e_{1}, e_{2}, e_{3})$ 的一阶线性偏微分方程组，系数 $\omega^{i}, \omega^{i}_{\ j}$ 由 $g, h$ 代数地给出。相容性条件只有 $\mathrm{d}^{2} = 0$，它拆成两块：$\Omega^{1}_{\ 2} = 0$（Gauss）与 $\Omega^{i}_{\ 3} = 0$（Codazzi）。这就是「Gauss–Codazzi 是唯一障碍」的全部内容。

**三步构造**：(i) 由 $g$ 取正交余标架 $\omega^{1}, \omega^{2}$，用挠率为零的条件解出 $\omega^{1}_{\ 2}$；(ii) 由 $h$ 定 $\omega^{i}_{\ 3}$，Gauss–Codazzi 保证 $\mathrm{d}^{2} = 0$，于是（Frobenius 定理）局部解出正交标架 $(e_{1}, e_{2}, e_{3})$；(iii) 再解 $\mathrm{d}r = \sum_{i}\omega^{i}e_{i}$ —— 这一支只需 $\mathrm{d}^{2}r = 0$，而它正是第一结构方程。

**唯一性**：两组解之差是一个平行的（常）正交变换加平移；把初始标架对齐就重合。

> 续见 notes/thm.fundamental-theorem-surfaces.2.md
