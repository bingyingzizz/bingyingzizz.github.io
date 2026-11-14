# 定向与 w1 消失　`prop.orientable-iff-w1`　·　说明
根 `../`

**为什么是 $w_{1}$ 而不是别的**：约化 $\mathrm{GL}(k) \rightsquigarrow \mathrm{SO}(k)$ 等价于「转移函数（`def.transition-function`）可以全部取在 $\mathrm{SO}(k)$ 里」，即行列式处处为正 —— 这只给 $\mathrm{GL}^{+}(k)$；而 $\mathrm{GL}^{+}(k)$ 形变收缩到 $\mathrm{SO}(k)$（对纤维度量做 Gram–Schmidt 正交化），配上度量后自动落进 $\mathrm{SO}(k)$ —— 两种口径等价。而行列式取值 $\pm 1$ 给出一个 $\mathbb{Z}/2$-值上闭链 —— 那正是 $w_{1}$：它记的是「绕一圈回来符号是否翻转」。所以 $w_{1} = 0$ 就是「能统一符号」。

⭐ **同一件事的三种说法**：$w_{1} = 0$ $\iff$ $\Lambda^{k}E^{*}$ 有处处非零的截面（$E = TB$ 时它正是体积形式，`def.orientable-manifold`）$\iff$ 定向双重覆叠 $\tilde B \to B$ 分裂（有截面）。三者互为翻译，但**计算上只有第一条方便** —— 它就是这条命题的价值。

> 续见 notes/prop.orientable-iff-w1.2.md
