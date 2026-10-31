# 标架下的联络系数　`prop.christoffel-frame`　·　说明
根 `../`

**① 与 $\Gamma$ 的真实关系**：坐标标架 $\partial_{i}$ 一般既不正交也不单位；正交归一化之后 $e_{i}$ 就不再是坐标标架（$[e_{1},e_{2}]\ne 0$），多出来的 $\langle [e_{i},e_{j}],e_{k}\rangle$ 项正是这件事的代价。所以「$\omega^{k}_{j}(e_{i})$ 等于某个 $\Gamma$」只在度量已经被坐标拉直（平坦的笛卡尔坐标）时才字面成立。

**曲线上两种写法**，这是对照里最有用的一条：

- 坐标标架：$\dot\gamma = \dot x^{k}\partial_{k}$，$\nabla_{\dot\gamma}\dot\gamma = \left(\ddot x^{k}+\Gamma^{k}_{ij}\dot x^{i}\dot x^{j}\right)\partial_{k}$；
- 正交标架：$\dot\gamma = y^{j}e_{j}$，$\nabla_{\dot\gamma}\dot\gamma = \left(\dot y^{k}+\omega^{k}_{j}(\dot\gamma)y^{j}\right)e_{k}$。

后一式里没有二次项，因为标架自己在转：二次项被吸收进 $\dot y$ 与 $\omega$ 了。**「测地线方程里有没有二次项」取决于标架，不取决于曲面。**

> 续见 notes/prop.christoffel-frame.2.md
